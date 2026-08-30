// в js есть несколько видов объявления функций, у каждой функции есть свои особенности
// function declaration
console.log( sum(100, 1) )

function sum(a, b) {
    return a + b
}
// в этом методе модно использовать функцию до объявления, такая механика называется поднятие или хостинг

// особенность function declaration, можно перезаписывать функцию
function logMessageDeclaration() {
    console.log("hello!")
}

logMessageDeclaration()

function logMessageDeclaration() {
    console.log("bye!")
}
// если мы переместим logMessage() то будет тот же результат, почему? потому что js сует все функции наверх и выполняет

// мелкая особенность function declaration 
function logAll() {
    // можно получить доступ к неявной переменной arguments
    console.log(arguments)
    // полезен когда функция принимает неопределенное количество параметров
}

logAll("hello", 555, false)

// function expression, такая функция имеет два отличия от function declaration
const logHelloExpression = function() {
    console.log("hello")
}
/**
 * 1)
 * const logHelloExpression = function() {
 *     console.log("bye")
 * } 
 * будет ошибка! но если поменять const на let, то сработает!
 * 2) такую функцию нельзя использовать до ее объявления
 * это очень правильно, код должен бить по рукам и быть структурированным
 */

logHelloExpression()

// arrow function - современный вариант
const logHelloArrow = () => {
    // console.log(arguments) - не сработает
    console.log("hello!")
}

logHelloArrow()

// функцию можно записать в одну строку
const sumArrow = (a, b) => a + b

console.log( sumArrow(1, 2) )

// какая бы не была функция, к ней нужно добавлять (), иначе мы получим буквально содержимое функции
console.log(sumArrow) // буквально выведет функцию

// мы можем создать функцию и объявить ее в другой переменной, а потом вывести
const fn1 = () => {
    return "i am function fn1"
}

// буквально произошла передача по ссылке
const fn2 = fn1

console.log(fn2())

// функции можно передавать в другие функции, это называется callback function
const logMessageCallback = (actionBefore, actionAfter) => {
    // предполагаем что параметры - функции, вызываем их
    actionBefore()
    console.log("hello!")
    actionAfter()
}

// создаем две функции и передаем в logMessageCallback
const fn_1 = () => console.log("before")
const fn_2 = () => console.log('after')

// используем их как аргументы
logMessageCallback(fn_1, fn_2)

// или делаем так:
logMessageCallback(
	() => console.log('before'),
	() => console.log('after')

    /**
     * console.log("before"),
     * console.log("after")
     * так делать не надо будет undefined
     * они вычислились до выполнения функции и выдали undefined
     */
)

// функция может возвращать результат другой функции
const validate = (hasAccess) => {
    if (hasAccess) {
        return () => console.log("access allowed!")
    } else {
        return () => console.log("access denied!")
    }
}

const logMessageValidate = validate(true)

logMessageValidate()

/**
 * функция должна выполнять одно действие, одну инструкцию
 * 
 * правильное название функций:
 * get - получить какое-то значение
 * set - установить какое-то значение
 * create - создать какую-то сущность
 * update - обновить какую-то сущность
 * delete - удалить какую-то сущность
 * show - показать что-то
 * hide - скрыть что-то 
 * search - найти что-то
 * calc - вычислить что-то
 * check - проверить что-то
 */