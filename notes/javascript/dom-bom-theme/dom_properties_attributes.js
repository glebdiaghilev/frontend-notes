// DOM element properties
/*
у каждого элемента DOM дерева
есть несколько параметров

у каждого элемента будут только те
свойства, которые ему соответствуют

все эти свойства можно получить
по принципу геттеров и сеттеров
*/
// получаем элементы
const formElement = document.querySelector('.form')
const loginInputElement = document.querySelector('.form__input[name="login"]')
const passwordInputElement = document.querySelector('.form__input[name="password"]')
const submitButtonElement = document.querySelector('.form__button')

/*
разметка для понятной работы:
<form class="form" action="/login" qwerty="!!!">
    <input class="form__input" name="login" placeholder="login">
    <input class="form__input" name="password" type="password" placeholder="password">
    <button class="form__button" type="submit">enter</button>
</form>
*/

// посмотрим что внутри
console.dir(formElement)
console.dir(loginInputElement)
console.dir(passwordInputElement)
console.dir(submitButtonElement)

// мы обратились к action, как к геттеру
console.log('formElement action:', formElement.action)

// обратимся к action, как сеттер
formElement.action = '/register'

// это все будет работать практически с любыми свойствами html атрибута
formElement.id = 'my-form'

// если html атрибут состоит из пары слов с дефисом, то он будет camel case
formElement.ariaLabel = 'some text'

// если в атрибуте будут кастомные свойства, 
// то они не будут отображаться в dom
// при обращении будет undefined
console.log('qwerty formElement:', formElement.qwerty)

// есть специальные методы, чтобы это решить 
// получение значения любого атрибута элемента
console.log(
    'formElement qwerty:',
    formElement.getAttribute('qwerty')
)

// чтобы установить значение атрибуту:
formElement.setAttribute('qwerty', '0')

console.log(
    'formElement new qwerty:', 
    formElement.getAttribute('qwerty')
)

// удаление атрибута:
formElement.removeAttribute('qwerty')

// проверка на существование атрибута:
console.log(
    'formElement has qwerty:',
    formElement.hasAttribute('qwerty')
)

// синхронизация значений свойств и атрибутов. правила те же, но есть исключение
// связано это исключение с атрибутом value у полей input
console.dir(loginInputElement)
// мы увидим свойство value пустым, его нет у input

// меняем value, обратившись к свойству, как к сеттеру
loginInputElement.value = 'admin'
// у input не добавится value

// установим setAttribute, и теперь null не будет
loginInputElement.setAttribute('value', 'admin')
// благодаря методу теперь есть value

// получаем атрибут value
console.log(
    // в консоли будет null, если не установить setAttribute
    'input value:',
    loginInputElement.getAttribute('value')
)

// обращаемся к свойству value
console.log(
    // в консоли нам выведет admin
    'input value:',
    loginInputElement.value
)

/*
вывод:
value у полей ввода синхронизируется только
в одну сторону
*/

// синхронизация сработает
loginInputElement.setAttribute('value', 'smith')
console.log('input value:', loginInputElement)

// не сработает, не стандартное поведение:
loginInputElement.value = 'vasya'
console.log('input value:', loginInputElement.getAttribute('value'))

// не манипулировать с value через get/set attribute, 
// обращаться как к свойству dom элемента, будет корректное значение
// лучше так делать со всеми атрибутами, кроме нестандартных
// вместо методов чтения и изменения значения атрибутов лучше всегда

/*
не манипулировать с value через get/set attribute, 
обращаться как к свойству dom элемента, будет корректное значение.
лучше так обращаться [как с value] со всеми атрибутами, 
кроме нестандартных. вместо методов чтения и изменения значения 
атрибутов лучше всегда обращаться к одноименному свойству dom
элемента.
*/

// свойство attributes, значение - объект, в нем атрибуты элемента
console.log(
    // обратиться к этим атрибутам через этот объект нельзя
    'loginInputElement attributes:',
    loginInputElement.attributes
)

// получить значение data атрибута
// <div class="slider" data-js-slider="example" data-name="alex" >
const sliderElement = document.querySelector('[data-js-slider]')

console.log(
    // будут перечислены все data атрибуты 
    sliderElement.dataset
)

// data атрибуты можно даже менять
sliderElement.dataset.name = 'vasya'

// протаскиваем объект в data- атрибуте
/*
data-object ='{
    "direction": "vertical",
    "loop": true,
    "slidesPerView": 1
}' 
вот так выглядит наш объект
*/
// получаем наш data атрибут
const objectSliderElement = document.querySelector('[data-object]')

// парсим его из строки в объект
const sliderParams = JSON.parse(
    objectSliderElement.getAttribute('data-object')
)

// выводим в консоль
console.log(sliderParams)
console.log(sliderParams.direction)