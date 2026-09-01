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