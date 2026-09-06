/*
помимо обычных querySelector и querySelectorAll
можно обращаться к form через document

в логах мы увидим коллекцию из двух элементов,
мы можем обратиться к ним по индексу.

если у нас есть id у form то доступ был бы еще нагляднее

в свойстве document.forms будут дополнительные свойства
с именами совпадающими с указанными в разметке id форм
там будут ссылки на dom элементы соответствующих форм.
для получения dom элемента формы все еще можно использовать
привычный многим querySelector.
*/
// доступ ко всем элементам form 
console.log(
    'all form elements on page:',
    document.forms
)

// обращаемся к форме
console.log(
	'registration form:',
	// по индексу
	document.forms[0],

    // по id формы
    document.forms.regForm
)

console.log(
    'auth form:',
    // по индексу
    document.forms[1],

    // по id формы
    document.forms.authForm
)

// доступ к dom элементам полей формы
/*
имея доступ к форме мы можем получить HTMLCollection его
внутренних input, label, button и прочих
*/
const formElement = document.querySelector('#regForm')

console.log(
    'input elements, textarea and select into the form:',
    formElement.elements
)

// получим особый список элементов radio
console.log(
    'radio buttons for gender choice:',
    formElement.elements.gender
)

// можно использовать сокращенную запись
// длинная запись:
console.log('long form:', formElement.elements.login)

// короткая запись:
console.log('short form:', formElement.login)

// доступ к форме к которому привязан dom-элемент
/*
у каждого dom-элемента (input, textarea, select) под капотом
есть свойство form, свойство form хранит ссылку на dom-элемент
формы к которой относится поле ввода. это свойство очень полезное.
независимо от положения и от сложности можно привязать любое поле
к любой форме.
*/
const loginInputElement = formElement.login
const passwordInputElement = formElement.password 

console.log(
    'in what form standing this input field?',
    loginInputElement.form
)

console.log(
    'in what form standing this input field?', 
    passwordInputElement.form
)

// будет null, нужно добавить form="regForm" чтобы привязать
console.log(document.querySelector('#city').form)

// управление элементами input и textarea 
const classicFormElement = document.querySelector('form')

const aboutTextAreaELement = document.about

// можем задать стартовый текст
loginInputElement.value = 'BestDeveloper'
aboutTextAreaELement.value = 'best than best!'

// если в html указали изначальное значение, его можно знать
// так правильно! получаем актуальные данные
console.log('login:', loginInputElement.value)
console.log('about themselves:', aboutTextAreaELement.value)

// так нельзя, можем получить неактуальные данные
console.log('about themselves:', aboutTextAreaELement.textContent)
console.log('about themselves:', aboutTextAreaELement.innerHTML)

// управление элементами input type radio
/* 
данные name мы получаем в виде RadioNodeList
там в самом внизу есть свойство value.
если мы обратимся к value radio элементу без
атрибута value, то информация будет странной (on).
поэтому стоит добавлять value к подобным атрибутам.

можно программно переключать checked для radio.
для этого есть всего несколько способов.
*/
const genderRadios = document.gender

// получаем значение
console.log('info about gender:', genderRadios)

// обращаемся к value
console.log('chosen gender:', genderRadios.value)

// можно посмотреть значение checked
console.log('male gender:', genderRadios[0].checked)
console.log('female gender:', genderRadios[1].checked)

// первый способ переключения:
genderRadios[0].checked = true 

// второй способ переключения:
genderRadios.value = 'male'

// управление элементом input type checkbox
/*
обращаемся к value у checkbox, у нас выводится on,
но при этом мы не нажимали на checkbox.
на самом деле это свойство проверяют иначе, через
свойство checked.
*/
const agreementCheckboxElement = formElement.agreement

// обращаемся к value
console.log('agree for all?', agreementCheckboxElement.checked)

// управление элементом select
/*
по разметке кажется, что текущее
значение должно быть пустым, так как ни на одном
элементе нет selected. но браузеру все равно и он выбирает
первый элемент из option.

можно установить другое значение через value, конечно,
это сработает, если указанный value есть среди options
*/
const citySelectElement = formElement.city

// получаем название города
console.log('chosen city:', citySelectElement.value)

// можно получить другим, но менее удобным способом
// коллекция dom элементов option
console.log('chosen city:', citySelectElement.options)

// индекс выбранной опции
console.log('chosen city:', citySelectElement.selectedIndex)

// текущее значение опции, сложный способ
console.log(
    'value:',
    citySelectElement.options[citySelectElement.selectedIndex].value
)

// установление другого значения
citySelectElement.value = 'London'

// второй способ установления другого значения
citySelectElement.options[4].selected = true

// управление элементом select multiple
/*
поставим для select атрибут multiple \
попробуем посмотреть значение через value.
мы получим неоднозначный результат. c multiple
selector может быть непросто работать. 

для этого есть selectedOptions, он присылает 
HTMLCollection с выбранными selector.
*/
// текущее значение через value
console.log('city value:', citySelectElement.value)

// для этой задачи используем selectedOptions
console.log('chosen options:', citySelectElement.selectedOptions)

// можно по разному их перебрать и соединить 
const selectValue = [...citySelectElement.selectedOptions]
    .reduce((acc, { value }, index) => {
        const separator = index > 0 ? ', ' : ''

        return `${acc}${separator}${value}`
    }, '')

console.log('selectValue:', selectValue)