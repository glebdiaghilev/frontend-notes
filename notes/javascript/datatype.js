// тип данных string
const greeting = 'hello!'
const name = 'alex'
const goodbye = `bye!` // бек тик, дает особые возможности

// интерполяция строк
const message = `${greeting}, ${name}!`

console.log(message)

// бек тик дает сделать интерполяцию строк
const a = 1
const b = 1
const sum = `sum: ${a + b}`

console.log(sum)

// бек тик дает возможность форматировать строки
const message_1 = `
   This
   long
   message
   for a few
   strings
`

// тип данных number
const posX = 50
const posY = -100
const posZ = 1.55

// можно проводить математические операции
const point = ((posX + posY + posZ) * 2) / posX

console.log(point)

console.log('word' / 100)

console.log(100 / 0)

console.log(-100 / 0)

/*
js имеет свой математический диапазон работы

-9007199254740991 < number < 9007199254740991

если выйти из диапазона то математические операции будут происходить с коллизиями
в итоге будут ошибки в вычислениях
*/

console.log(9900000000000091 * 1)
console.log(9900000000000091 * 2)

// чтобы такого не происходило, есть специальный тип данных BigInt
console.log(9900000000000091n * 1n)
console.log(9900000000000091n * 2n)

// между цифр для удобства ставят нижнее подчеркивание
const number = 1_000_000_000

// тип данных boolean
const shouldLearnJs = true
const isAlreadyLate = false

const age_3 = 38
const isChild = age_3 < 18

console.log(isChild)

// тип данных null, формально специальное значение
let data = null

console.log(data)

// тип данных undefined, значит, что значение не было присвоено
let name_3 = undefined // не рекомендуется, лучше использовать null

console.log(name_3)

// тип данных объект
const user = {}

/*
все типы данных в js кроме object являются примитивными
*/

// проверка типов данных typeof
const message_2 = "hello"

console.log(
    typeof message_2, // variable, string
    typeof 100, // int
    typeof 100n, // bigint
    typeof true, // boolean
    typeof null, // object (error)
    typeof undefined, // undefined
    typeof {}, // object
    typeof (111 + 222) // math int number
)

// преобразование типов данных, явное и неявное
// неявное преобразование:
const num = 111
const str = "222"
const result = num + str

console.log(result)
console.log(typeof result)

console.log(
    '16' / '8', // не рекомендуется так делать 
    typeof ("16" / "8")
)

// явное преобразование:
// string():
const num_1 = 11
const obj = {}

console.log(
    num_1, 
    typeof num_1
)

console.log(
    String(num_1), 
    typeof String(num_1)
)

console.log(
    String(obj)
)

// number():
const str_1 = "1000"
const num_2 = Number(str_1)

console.log(str_1)
console.log(num_2)

console.log(
    Number("some what not a number")
)

console.log(
    Number(true)
)

console.log(
    Number(false)
)

console.log(
    Number(null)
)

// Boolean():
console.log(Boolean(-1))
console.log(Boolean(0))
console.log(Boolean(1))
console.log(Boolean(2))

console.log(Boolean("hello!"))
console.log(Boolean("0"))
console.log(Boolean(" "))
console.log(Boolean(""))

// преобразуются в false
console.log(Boolean(0))
console.log(Boolean(NaN))
console.log(Boolean(""))
console.log(Boolean(null))
console.log(Boolean(undefined))
// остальное в true