// метод length для измерения длины
const nameLengthStr = "gleb"
const emptyStr = ""
const strWithOneSpace = " "

console.log(`string length: ${nameLengthStr}: `, nameLengthStr.length) // 9
console.log(`string length: ${emptyStr}: `, emptyStr.length) // 0
console.log(`string length: ${strWithOneSpace}: `, name.length) // 1

// поиск символа строки по индексу 
const indexName = "gleb"

console.log( indexName[0] ) // первый символ 
console.log( indexName[1] ) // второй символ

// отрицательного индекса быть не может, будет undefined 
console.log( indexName[-1] )

// чтобы получить последний символ строки можно сделать так:
console.log( indexName[indexName.length - 1] )

// второй метод получения символа строки, метод at
const atName = "gleb"

console.log( atName.at(0) ) // получим первый символ строки
console.log( atName.at(1) ) // получим второй символ строки

// можно использовать отрицательный числа 
// мы получим первый символ с конца строки 
console.log( atName.at(-1) )
// оба метода позволяют лишь получить символ, но не изменить

// метод изменения текста в нижний и верхний регистр символов строки 
const lowerText = "sOmEtExt"

// в нижний регистр
console.log( lowerText.toLowerCase() )

// в верхний регистр
console.log(lowerText.toUpperCase())

// обрезка пробелов 
const emptiedMessage = "   hello   "

console.log(
    `string ${emptiedMessage} has length ${emptiedMessage.length} symbols`
)

// для обрезки пробелов
const formattedAllMessage = emptiedMessage.trim()

console.log(
    `string ${formattedAllMessage} has length ${formattedAllMessage.length} symbols`
)

// для обрезки пробелов с начала
const messageFormattedBefore = emptiedMessage.trimStart()

console.log(
	`string ${messageFormattedBefore} has length ${messageFormattedBefore.length} symbols`,
)

// для обрезки пробелов с конца
const messageFormattedAfter = emptiedMessage.trimEnd()

console.log(
	`string ${messageFormattedAfter} has length ${messageFormattedAfter.length} symbols`,
)

// метод indexof, позволяет найти нужный кусок текста и выдает индекс начала текста
const indexOfMessage = "trying to find ~this text~ in this sentence"

console.log(
    indexOfMessage.indexOf("~this text~"),

    // если мы попытаемся найти строку которой нет, то выведет индекс -1
    indexOfMessage.indexOf("declaration of usa statement"),

    // обычно, если хотят сделать проверку, то пишут так, оно выведет false
    indexOfMessage.indexOf("declaration of usa statement") !== -1
)

// метод includes позволяет без ручной проверки проверить содержание строки
const includeMessage = 'trying to find ~this text~ in this sentence'

console.log(
    // оно выведет true
    includeMessage.includes("~this text~")
)

// проверка начала и окончания строки
const endsStartsWithMessage = "string start and string end"

console.log( endsStartsWithMessage.startsWith("str") )
console.log( endsStartsWithMessage.endsWithWith('end') ) 

// каждому рассмотренному методу можно задать индекс
const messageIndexArgument = "hello"

console.log( messageIndexArgument.indexOf("el", 4) )
console.log(messageIndexArgument.includes('el', 4))
console.log(messageIndexArgument.startsWith('he', 0))
console.log(messageIndexArgument.endsWith('he', 3))

// способы обрезки строки. получить подстроку.
const cutString = 'JavaScript'

// два аргумента: индекс с которого начинается обрезка и с которого заканчивается.
console.log( cutString.substring(0, 4) ) // выведет Java

// можно указать один аргумент. будет использоваться индекс последнего символа строки.
console.log( cutString.substring(4) ) // выведет Script

// этот метод позволяет передавать индексы в любом порядке.
// в таком случае js поменяет их местами. это вводит в заблуждение
console.log( cutString.substring(0, 4) )
console.log(cutString.substring(4, 0))

// метод slice - это substring, не дающий менять индексы местами, иначе вернет пустую строку.
console.log( cutString.slice(0, 4))

// в аргументах slice можно передать отрицательный индекс. он обрежет строку с 6-ого конца символа.
console.log(cutString.slice(-6))

/*
если мы передадим два отрицательных индекса,
то мы получим подстроку, которая 
начинается на 6-ом индексе с конца, 
и заканчивается на 3-ем индексе с конца 
*/
console.log(cutString.slice(-6, -3))

// повторить строку - метод repeat.
const repeatString = "JavaScript"

console.log( repeatString.repeat(3) )

// замена части строки replace
const replaceMessage = 'i learning back-end, but i know nothing of back-end'

// принимает два аргумента: что берем и что меняем.
// если будет второе слово back-end, то метод replace заменит только первое, а второе оставит
console.log(
	replaceMessage.replace('back-end', 'front-end'),

	// если мы хотим чтобы поменялись все слова back-end то делаем это
    replaceMessage.replaceAll("back-end", "front-end")
    // эти методы могут принимать регулярные выражения.
)

// разбиение строк на массив 
const splitString = 'hello, world'

console.log(
    // в качестве разделителя мы указали запятую и пробел
    splitString.split(', ')
)

// эти методы не мутируют строку:
const message = " hello!   "

console.log(`
    message before:
    "${message}"    
`)

// эти методы не изменяют строку
message.trim()
message.toUpperCase()
message.slice(0, 4)

console.log(`
    message after:
    "${message}"    
`)

// но можно сделать так и все сработает.
let message_1 = " hello!   "

message_1 = message_1.trim().toUpperCase().slice(0, 4)

console.log(`
    let message after:
    "${message}"    
`)

// практическая задача:
const value = prompt("enter you name:")

const clearValue = value.trim().toLowerCase()

if (clearValue.length === 0) {
    alert("error! name cant be empty")
}

if (clearValue.includes("admin")) {
    alert("error! name cant be admin")
}

// обычно серьезные проверки делаются через регулярные выражения.