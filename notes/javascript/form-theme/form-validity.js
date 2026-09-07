// виды валидации форм
/*
валидация форм бывает в двух видах.
нативная - сугубо через html атрибуты:
required, pattern, min lengths max lengths, а бывает
валидация более серьезная, с применением js, предпочтительнее
комбинация обоих способов - и атрибуты в разметке добавим,
и js логику повешаем.
*/
// подготовка разметки - нужные атрибуты
/*
1. добавим required полю ввода логина и пароля, и двум radio 
кнопкам, а так же checkbox;
2. усилим требования к логину и паролю min/max lengths;
3. добавляем pattern в значении которого регулярные выражения
для password input;
4. укажем конкретную информацию о некорректном пароле в title;
5. отключаем стандартную браузерную валидацию novalidate в form;
6. добавим в form data-js-form;
7. в каждый элемент с классом field добавим пустой span с 
классом field__errors и добавим data-js-form-field-errors;
8. после такой span привязываем с input через aria-errormessage
и id у span;
*/ 
// написания js-кода валидации формы
class FormsValidation {
	selectors = {
		form: '[data-js-form]',
		fieldErrors: '[data-js-form-field-errors]',
	}

	errorMessages = {
		valueMissing: () => 'please fill in this field',
		patternMismatch: ({ title }) =>
			title || 'the data does not match the format.',
		tooShort: ({ minLength }) =>
			`the value is too short, minimum symbols - ${minLength}`,
		tooLong: ({ maxLength }) =>
			`the value is too long, maximum symbols - ${maxLength}`,
	}
	constructor() {
		this.bindEvents()
	}

	// метод визуального управления ошибками
	manageErrors(fieldControlElement, errorMessages) {
		const fieldErrorsElement = fieldControlElement.parentElement.querySelector(
			this.selectors.fieldErrors,
		)

		fieldErrorsElement.innerHTML = errorMessages
			.map((message) => `<span class="field__errors">${message}</span>`)
			.join('')
	}

	// метод валидации поля
	validateField(fieldControlElement) {
		/*
        здесь творится основная магия - у каждого
        dom элемента есть свойство validity - оно
        полностью предназначено для функционала валидации 
        */
		const errors = fieldControlElement.validity
		const errorMessages = []

		Object.entries(this.errorMessages).forEach(
			([errorType, getErrorMessage]) => {
				if (errors[errorType]) {
					errorMessages.push(getErrorMessage(fieldControlElement))
				}
			},
		)

		this.manageErrors(fieldControlElement, errorMessages)

        const isValid = errorMessages.length = 0

		// улучшаем accessibility поля ввода
		fieldControlElement.ariaInvalid = !isValid

        return isValid
	}

	// обработка события blur
	onBlur(event) {
		// логика функции-обработчика blur
		const { target } = event
		const isFormField = target.closest(this.selectors.form)
		const isRequired = target.required

		if (isFormField && isRequired) {
			this.validateField(target)
		}
	}

	// обработка события change
	onChange(event) {
		const { target } = event
		const isRequired = target.required
		const isToggleType = ['radio', 'checkbox'].includes(target.type)

		if (isToggleType && isRequired) {
			this.validateField(target)
		}
	}

	// обработка события submit
    onSubmit(event) {
        const isFormElement = event.target.matches(this.selectors.form)

        if (!isFormElement) {
            return
        }

        const requiredControlElements = [...event.target.elements].filter(({ required }) => required)
        let isFormValid = true
        let firstInvalidFieldControl = null

        requiredControlElements.forEach((element) => {
            const isFieldValid = this.validateField(element)

            if (!isFieldValid) {
                isFormValid = false

                if (!firstInvalidFieldControl) {
                    firstInvalidFieldControl = element
                }
            }

            if (!isFormValid) {
                event.preventDefault()
                firstInvalidFieldControl.focus()
            }
        })
    } 

	bindEvents() {
		document.addEventListener(
			'blur',
			(event) => {
				// обработка события blur - добавление третьего аргумента
				this.onBlur(event)
			},
			{ capture: true },
		)

		// обработка события change
		document.addEventListener('change', (event) => this.onChange(event))

		// обработка события submit
		document.addEventListener('submit', (event) => this.onSubmit(event))
	}
}

new FormsValidation()