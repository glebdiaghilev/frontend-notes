/*
json (javaScript object notation) - это 
стандартизированный формат данных в виде js объекта

есть несколько правил в json:
1. в качестве значений может быть только типы данных
и массивы. никаких undefined или функций!!
2. все имена свойств обязательно оборачиваются
в двойные кавычки. бектики и одинарные нельзя!!
3. висячие запятые запрещены

json нужен для общения с сервером, он переводит все в строку
*/

const user = {
    "name": "gleb",
    "age": 67,
    "city": "Moscow",
    "address": {
        "street": "st. ronaldo h. 185 fl. 10",
        "zipcode": 123456
    },
    "todos": ["sleep", "eat", "work", "train", "learn"],
    "hasCat": true,
    "yacht": false
}

// для работы с json форматом есть специальный объект JSON
// чтобы образовать js объект в json Объект в виде строки пишем так:
const userDataAsString = JSON.stringify(user)

console.log(userDataAsString)

// чтобы образовать json объект в js объект пишем так:
const parsedUserData = JSON.parse(userDataAsString)

console.log(parsedUserData)

// ограничения метода JSON.stringify()
// он просто не примет функции и undefined и обработает только name: 'gleb'
const loser = {
    name: 'gleb',
    sayHi() {
        console.log("hello!")
    },
    car: undefined,
}

const userDataWasString = JSON.stringify(loser)
console.log(userDataWasString)

// данные в json необязательно должны начинаться с фигурных скобок
// можно начинать сразу с массива, ведь массив - это объект