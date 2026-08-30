// глобальный window, в нем методы - это браузерное окружение для js
console.log(window)

// браузерное окружение дает оживление интерфейса, например:
// добавление на страницу новых элементов:
const divElement = window.document.createElement('div')

// стили элементов
divElement.style.width = '100px'
divElement.style.height = '100px'
divElement.style.border = '2px solid red'
window.document.body.appendChild(divElement)

// удаление уже имеющихся
window.document.querySelector('div').remove()

// обработка характерных для браузера событий
window.document.addEventListener('click', (event) => {
    console.log('coordinate of click:', `x: ${event.x}, y: ${event.y}`)
})

window.addEventListener('click', (event) => {
    console.log('coordinate of scroll:', `x: ${event.x}, y: ${event.y}`)
})

// окружение дает нам получать информацию о браузере
console.log(window)

console.log(window.navigator.userAgent)

// сам глобальный объект window
// window делится на три типа:
// все браузерное окружение:
console.log(window)

// основной js:
console.log(window.Math)
console.log(window.Object.keys({ name: 'gleb', age: 67 }))
console.log(window.Number(0))
console.log(window.Boolean)

// BOM (Browser Object Model):
console.log(window.navigator)
console.log(window.screen)
console.log(window.location)
console.log(window.history)
console.log(window.frames)
console.log(window.fetch)
console.log(window.XMLHttpRequest)

// DOM (Document Object Model):
console.log(window.document)

/*
BOM (Browser Object Model) - это объектная модель 
браузера в рамках которой мы получаем возможность 
пользоваться специальными объектами: navigator,
screen, location, history и т.п. 
каждый из этих объектов содержит информацию
о браузере, экране, url, истории сессий и т.д.
*/
// содержит данные:
console.log('info about browser:', window.navigator)
console.log('info about screen:', window.screen)
console.log('info about URL:', window.location)
console.log('info about history:', window.history)

// сохранить данные в localStorage
window.localStorage.setItem('id', JSON.stringify({ id: 123 }))

const id = JSON.parse(
    // получить данные из localStorage
    window.localStorage.getItem('key-name')
)

// отправка на сервер get-запроса и получение ответа
window.fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => { response.json()})
    .then((users) => console.log('users:', users))

/*
DOM (Document Object Model) - это объектная модель 
документа, которая позволяет взаимодеиствовать 
с содержим страницы в виде объектов.
*/

// в window за DOM отвечает document
console.log(window.document)

// посмотрим что внутри document
console.dir(window.document)

/*
children - это обычные элементы, которые 
создаются через html теги. эти элементы называют 
узлами или нодами (nodes).

childNodes = это тоже узлы, но помимо обычных 
элементов еще перечислены текстовые узлы,
иначе говоря узлы, отвечающие за текст 
вложенный в обычные элементы.

в DOM дереве есть вся 
информация с точностью до символа.

в реальности нам не нужно капаться в DOM
дереве, для этого есть удобные методы
*/

// все что связано с window можно использовать без window
console.log(navigator)
console.log(window.navigator)

// мы можем допустить ошибку, при названии переменной так же как и глобальный объект из window
// лучше иногда window писать для различия
const innerWidth = 10
const innerHeight = 5

console.log(innerHeight)
console.log(innerWidth)

console.log(window.innerHeight)
console.log(window.innerWidth)
// не всегда работает, например, location зарезервирован и фокуса не будет
// но если же у нас будет модуль, то фокус сработает
console.log(
    'url address right now:',
    window.location.href
)

// но этот баг только на поверхностном уровне и в функции location может быть
const someSn = () => {
    const location = 'Moscow'

    // если location будет в той же области видимости
    console.log(
        'url address right now:', 
        window.location.href
    )
}

// не называйте глобально переменные так:
const location = 'Moscow' // его стоит убрать для терминала

// называйте как-то иначе:
const cityLocation = 'Moscow'

// и всегда пишите window.
console.log(window.location.href)

// а если сильно хочется то делайте не на глобальном уровне
const fn = () => {
    const location = 'Moscow'

    console.log(
        'full url address:',
        window.location.href
    )
}

fn()

// никогда не объявляйте переменную document
console.log(document)

// const document = 'bla-bla-bla'