// перебор массива
const alphabet = [
	'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
]

// старый ненужный метод
for (let i = 0; i < alphabet.length; i++) {
    console.log(alphabet[i])
}

// forEach метод
alphabet.forEach((letter, index, array) => {
    // это сам элемент
    console.log(letter)

    // это счетчик цикла
    console.log(`at index [${index}] is located letter ${letter}`)

    // это ссылка на перебираемый массив
    console.log(array)

    // это все опционально, часто используют только первый
})

// иногда требуется найти индекс элемента в массиве
const prices = [100, 200, 444, 500, 444, 777]

// используем метод IndexOf
console.log(prices.indexOf(444))

// если элемента не существует то будет индекс -1
console.log(prices.indexOf(111))

// можно указать индекс с которого будет происходить поиск в массиве
console.log(prices.indexOf(444, 3))

// чтобы начать поиск с конца, пишем так:
console.log(prices.lastIndexOf(444))

// ищем индекс элемента не примитивного типа данных
const findIndexUsers = [
    {
        name: "gleb",
        age: 69,
    },
    {
        name: "josh",
        age: 67,
    },
    {
        name: "kevin",
        age: 52,
    },
] 

// вместо false такие методы возвращают -1
console.log(
    // с начала массива
    findIndexUsers.findIndex((user) => {
        if (user.name === "josh") {
            return true
        }
    }),

    // с конца массива
    findIndexUsers.findLastIndex((user) => user.name === "josh")
)

// проверка наличия элемента в массиве
const includePrice = [100, 200, 444, 500, 444, 777]

// более удобный метод Includes
console.log(prices.includes(500))

// можно указать индекс с которого будет начинаться проверка
console.log(prices.includes(500, 3))

// чтобы проверить наличие более сложных структур пишем some 
const someUsers = [
    {
        name: "josh",
        age: 67,
    },
]

console.log(
    someUsers.some((user) => {user.name === "josh"})
)

// проверка каждого элемента массива на соответствие условию
const everyUsers = [
    {
        name: "gleb",
        age: 67,
    },
    {
        name: "josh",
        age: 69,
    },
]

console.log(
    everyUsers.every((user) => {user.age <= 18})
)

// найти конкретный элемент в массиве по условиям
const findUsers = [
	{
		name: 'gleb',
		age: 67,
	},
	{
		name: 'josh',
		age: 69,
	},
]

console.log(
    findUsers.find((user) => {user.name === "gleb"})
)

// воспроизвести фильтрацию массива 
const filterUsers = [
	{
		name: 'gleb',
		age: 67,
	},
	{
		name: 'josh',
		age: 69,
	},
]

console.log(
    filterUsers.filter((user) => {user.age === 67})
)

const losers = [
	{
		name: 'alex',
		age: 69,
		city: 'Moscow',
	},
	{
		name: 'gleb',
		age: 67,
		city: 'london',
	},
	{
		name: 'Vasya',
		age: 1488,
		city: 'Moscow',
	},
	{
		name: 'Walter',
		age: 52,
		city: 'albuquerque',
	},
]

// задача с filter. фильтруем массив
const filteredLosers = losers.filter(({ city, age }) => {
    return city === "Moscow" || age < 100 && age > 60
})

console.log(filteredLosers)

// map перебирает массив и позволяет модифицировать каждый элемент
const losersFormatted = losers.map((user) => {
    return `${user.name}, ${user.age} years old, live in city ${user.city}`
})
// map не мутирует исходный объект!

console.log(losersFormatted)

// задача: нужно получить средний возраст losers
// это плохой пример, через цикл
let ageSumFor = 0

for (let i = 0; i < losers.length; i++) {
    ageSumFor += losers[i].age
}

console.log(ageSumFor / losers.length)

// метод reduce
const ageSumReduce = losers.reduce((sum /*accumulator*/, user) => {
    return sum + user.age
}, 0)

console.log(ageSumReduce / losers.length)

// иногда нужно перебрать элементы слева направо 
const iterateAge = losers.reduceRight((sum, { age }) => {
    console.log(age)
    
    return sum + age
}, 0)

// перевернуть массив - reverse. этот метод мутирует исходную сущность
const reversedLosers = [...losers].reverse() // чтобы не мутировать

console.log(reversedLosers)

// сортировать исходный массив меняя порядок элементов
const names = ['josh', 'gleb', 'vasya', 'misha', 'kevin']

// при sort() js воспринимает как строку, сравнивает посимвольно
const sortedNames = names.sort()

console.log(sortedNames)

// можно поменять правила сортировки
const numbers = [8, 500, 4]

// обычно входят только два параметра, сравниваемые значения
const sortedNumbers = [...numbers].sort((a, b) => a - b)

/*
a - 8, b - 4.

на каждом шаге цикла функция должна вернуть одно из трех значений:
1. положительной число
2. ноль
3. отрицательное число

1. если мы укажем выражение a - b, то в случае, когда результат
будет отрицательным числом, js сделает вывод, что a должно
идти раньше чем b. 

2. если же результат будет положительным числом, то js решит,
что в сортируемом массиве b должно идти раньше, чем a.

3. если в результате выражения вернется ноль, то это будет
означать, что оба значения эквивалентны и их порядок не надо менять.

если мы хотим чтобы сортировка шла по убыванию то пишем b - a.
*/

console.log(sortedNumbers)