// прошлый dom_navigation.js не всегда подходит
// они позволяют искать "по одному шаг", это неудобно
const buttonElementLong =
	document.children[0].children[0].children[0].children[0] // body // <div class="box-1"> // <div class="box-2"> // <div class="box-3"> //  button

console.debug('button:', buttonElementLong)

// если у элемента id, то получаем так:
const buttonElementId = document.getElementById('myButton')

// если элемент не найден будет null
console.log('buttonELementId:', buttonElementId)
// если элементов два, то будет выбран только первый

// можно глобально обращаться к id, если название camel case
console.log('button', myButton) // не стоит так делать!
// если бы создали переменную myButton, то не сработало бы

// мы можем получить элемент без id:
// можно 'button', если есть id #myButton, если class, то .myButton
const buttonElementQuery = document.querySelector('#myButton')
// можно найти любой элемент любым способом этим методом

console.log('button:', buttonElementQuery)
// иногда нужно получить несколько элементов, например, list
const listItemElements = document.querySelectorAll('.list .item')

// возвращается структура узлов, похожая на HTMLCollection
console.log('list elements:', listItemElements)

// мы можем перебрать эти элементы, браузер при наведении выделяет элемент
listItemElements.forEach(element => {
	console.log('list element:', element)
})
// если NodeList не найдет ни одного селектора, то он будет пустым

// мы можем использовать эти два метода у любого dom элемента
const wrapperElement = document.querySelector('#wrapper')
console.log('wrapperElement:', wrapperElement)

const listElement = wrapperElement.querySelector('.list')
console.log('listElement:', listElement)

const itemElements = listElement.querySelectorAll('.item')
console.log('listItemElements:', itemElements)

// нахождение ближайшего родительского элемента
// найти родительский элемент с классом object-1
const thirdObjectElement = document.querySelector('.object-3')

const firstObjectElement = thirdObjectElement.closest('.object-1')

console.log('first object element:', firstObjectElement)

// можно за раз взять сразу несколько селекторов
const objectsHTML = document.querySelectorAll(`
    .object-1,
    .object-2,
    .object-3    
`)

console.log('objects in html:', objectsHTML)

// есть методы, которые не используют, но знать нужно
// возвращает список элементов по имени тега
const formElements = document.getElementsByTagName('form')

//возвращает список элементов по имени класса
const radioGroupElements = document.getElementsByClassName('radio-group')

// возвращает список элементов по значению атрибута name
const inputElements = document.getElementsByName('specialization')

console.log(formElements)
console.log(radioGroupElements)
console.log(inputElements)
// эти методы возвращают живые коллекции, в отличие от тех двоих

// статические и живые коллекции
// те три метода были живыми коллекциями
console.log('before:', formElements)
console.log('before:', radioGroupElements)
console.log('before:', inputElements)

const secondFormElement = formElements[0] //.cloneNode(document.body.appendChild(secondFormElement))

// все будет так же как и в before
console.log('after:', formElements)
console.log('after:', radioGroupElements)
console.log('after:', inputElements)
// а querySelector и querySelectorAll статические, разница была бы

// полученные списки от этих трех методов нельзя
// перебрать forEach, только spread оператором

// для обычных тегов стоит использовать понятные имена:
const link = document.querySelector('a')
const list = document.querySelector('ol')
const listItem = list.querySelector('li')

// есть проблема, может быть другой link или list, добавляем суффикс:
const linkElement = document.querySelector('a')
const newListElement = document.querySelector('ol') // listElement правильнее
const listItemElement = list.querySelector('li')

// если querySelectorAll то добавляем s:
const linkElements = document.querySelector('a')
const listElements = document.querySelector('ol')
const newListItemElements = list.querySelector('li') // listItemElements правильнее
 
// лучше находить элементы не используя id class или тег, используем data-
const sliderElement = document.querySelector('[data-js-slider]')
const sliderListElement = document.querySelector('[data-js-slider-list]')
const sliderSlideElements = document.querySelectorAll('[data-js-slider-slide]')
