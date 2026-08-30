console.log("hello!", 555, "warm")
console.log("hi! hi!")

console.log(
    123,
    345,
    666,
    777
)

// однострочный comment

/*
    многострочный 
    comment
*/

// можно переопределить и сразу присвоить значение
let message_1
message_1 = "hello"

let message_2 = "hello"

console.log(message_2)

message_2 = "bye"

console.log(message_2)

// нельзя переопределить, значение неизменно
const message_3 = "hello"

// можно переопределить, можно использовать переменную перед ее объявлением, не рекомендуется!
console.log(message_4)

var message_4 = "hello"

// можно создать сразу несколько переменных, не рекомендуется!
const name = "max", age = 52, isDeveloper = true

// можно присвоить переменной другую переменную
const name_1 = "alex"
const admin = name_1

console.log(admin)

// можно не указывать var, let или const, не рекомендуется! для отсутствия этой ошибки используем метод
// 'use strict'

age_1 = 10

console.log(age_1)

// есть запрещенные названия переменных, которые вызывают ошибку
// const this = 1

// называть переменные можно как угодно, но имя переменной не может начинаться с цифры: 1name!
let massage
let Massage
let MASSAGE
let myMassage
let член
let _$name_first23_

// переменные называют в разных стилях
// camel case: все слова кроме первого с большой буквы, самый популярный вариант
const firstName = "salmon"
const warm = 12
const isAgeBelowTheLimit = true

// screaming snake case: все слова большими буквами, разделено подчеркиванием, используют для констант
const BASE_URL = "https://google.com"
