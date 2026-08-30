// в js можно работать с объектом как с массивом
const willBeArray = {
    name: 'gleb',
    age: 67,
    city: 'los-angeles',
}

// получаем массив ключей объекта
const userKeys = Object.keys(willBeArray)

// получаем массив имен объекта
const userValues = Object.values(willBeArray)

// получаем объект в виде массиве, где каждый элемент - массив
const userEntries = Object.entries(willBeArray)

console.log(userKeys)
console.log(userValues)

// задача: преобразовать один объект в другой 
const unformattedUsers = {
	name: 'gleb',
	age: 67,
	city: 'los-angeles',
}

const makeUserEntries = Object.entries(unformattedUsers)

const userEntriesFormatted = makeUserEntries.map(([key, value]) => {
    return [key.toUpperCase(), `~~${value}~~`]
})

console.log(userEntriesFormatted)

// чтобы это обратно превратить в объект пишем так:
const userFromEntries = Object.fromEntries(userEntriesFormatted)

console.log(userFromEntries)

// структура данных map. map collection
// напишем mapData[1] и mapData['1'] в обычном массиве и примется последний
// тут можно добавить сразу два элемента
const mapData = new Map([
    [1, 'one like a number'],
    ['1', 'one like a string'],
])

// чтобы добавить элементы динамически пишем set
mapData.set(2, 'two like a number')
mapData.set('2', 'two like a string')

// обращаться так к map нет смысла
console.log('data:', mapData)

// вот так обычно обращаются к map
console.log(mapData.get(1))
console.log(mapData.get('1'))

// проверка на существование элемента по определенному ключу
console.log(mapData.has('name'))


// так как эти методы меняют кол-во пар в map я решил их сделать let
// у коллекции map можно удалить по ключу
let isolatedMapData = mapData.delete('2')

// можно полностью очистить коллекцию map
isolatedMapData = mapData.clear()

// можно узнать размер map коллекции, кол-во пар
console.log(mapData.size)

// keys values entries методы по аналогии с Object
const iteratingMap = new Map()

iteratingMap.set('name', 'gleb')
iteratingMap.set('age', 67)

// эти методы представляют map в виде перебираемого итерируемого объекта
console.log('keys:', iteratingMap.keys())
console.log('values:', iteratingMap.values())
console.log('entries:', iteratingMap.entries())

// чтобы перебрать объект используют цикл for of
// перебирает ключи
for (const key of iteratingMap.keys()) {
    console.log('key', key)
}

// перебирает значения
for (const value of iteratingMap.values()) {
    console.log('value', value)
}

// перебирает пары массивом
for (const entry of iteratingMap.entries()) {
    console.log('entry', entry)
}

// forEach почти идентичен с методом перебора массива. другие параметры
iteratingMap.forEach((value, key, map) => {
    console.log('value:', value)
    console.log('key:', key)
    console.log('map:', map)
})

// преобразуем объект в map коллекцию
const objectNotMap = {
    name: 'gleb',
    age: 67,
}

const objToMap = new Map(Object.entries(objectNotMap))

objToMap.forEach((value, key) => {
    console.log(`${key}, ${value}`)
})

// коллекция set, set collection. хранит значения, может быть в единственном экземпляре
const set = new Set([1, 2, 2, 3])

console.log(set)

// добавить значение в set - add метод
const arr = []
const set_methods = new Set()

arr.push('gleb')
arr.push('gleb')

set_methods.add('gleb')
set_methods.add('gleb')

console.log('arr:', arr, 'set_methods:', set_methods)

// delete - удалить значение 
set_methods.delete('gleb')

// проверить наличие значения
set_methods.has('gleb')

// получить размер коллекции set
set_methods.add('gleb')
console.log(set_methods.size)

// очистить set коллекцию
set_methods.clear()

// у set есть entries keys values, разницы между keys и values у set нет!!
// при работе с entries на каждой итерации мы получаем массив с одинаковыми значениями!!