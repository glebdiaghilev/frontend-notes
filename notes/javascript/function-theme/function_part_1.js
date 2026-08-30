/* 
функция нужна для того, 
чтобы использовать действие, 
набор действий или инструкции несколько раз
в разных местах кода под человекоподобным именем
*/

// многие команды на самом деле являются функциями
console.log("hello from console!") // функция вывода в консоль

const numberFromString = Number("100") // функция преобразования в число
const stringFromNumber = String(100) // функция преобразования в строку
const booleanFromNull = Boolean(null) // функция преобразования в булевой тип

// В браузерной среде доступны встроенные функции взаимодействия с пользователем:
alert("hello from alert!") // Функция модального окна с сообщением
confirm("some choose") // Функция окна выбора (ОК/Отмена), возвращает true/false

const answer = prompt("enter answer:") // Функция ввода текста, возвращает строку или null

// есть несколько способов, чтобы написать свою функцию
// Function Declaration (Объявление функции)
function logHello() {
    console.log("hello")
}

// код внутри тела функции не выполнится сразу, он выполняется по запросу, чтобы ее вызвать, используем круглые скобки после имени функции:
logHello()

// область видимости (scope)
function logMessage() {
    const message = 'hello'

    console.log(message)
} // <-- переменные объявленные внутри этих фигурных скобок не сработают вне фигурных скобок функции

logMessage()

// console.log(`${message}, friend!`) не сработает, так как переменной message есть только внутри функции logMessage()
/*
у каждой сущности в javascript есть своя область видимости в рамках которой сущность может быть использована
*/

// пример области видимости
const global_message = "global hello!"

function localMessage() {
	const message = 'local hello!'
	// переменная сработает внутри тела функции

	console.log(message)

    for (let i = 0; i < 3; i++) {
        const message = `loop iteration №${i}`
        // переменная сработает внутри тела цикла

        console.log(message)
    }
}

localMessage()

console.log(global_message) // переменная сработает глобально

// еще один пример области видимости
// обычно просто так фигурные скобки не пишут, но для более понятного примера я решился написать области фигурными скобками
{
    const number = 1
    console.log(number)

    {
        const number = 2
		console.log(number)

        {
            const number = 3
			console.log(number)
        }
    }
}

// console.log(number) не сработает вне тела фигурных скобок

// параметры функций
// функция может принимать любые данные, с которыми будет работать в теле функции 
function consoleMessage(message, count) {
    for (let i = 0; i < count; i++) {
        console.log(message)
    }
}
// параметры message и count по-сути являются локальными переменными

consoleMessage("hello!", 3) // даем значение параметрам. значения параметров называют аргументами

// пример использования
const message_1 = "hello"

function logMessage_1(message, count) {
	// берем параметр и обертываем в переменную функции
	const message_1 = `(((${message})))`
    // мы берем не переменную message_1, а параметр message!

    // делаем цикл с нашей переменной
    for (let i = 0; i < count; i++) {
        console.log(message_1)
    }
}

// вызываем функцию и даем аргументы
logMessage_1(message_1, 3)

// выводим в терминал переменную message_1
console.log(message_1)
/*
этот код нельзя назвать хорошим, так как может запутать разработчика, 
лучше всего называть переменные как-то иначе, чтобы не вводить в заблуждение

правки кода:
1) в этом коде я бы поменял переменную message_1 на globalMessage
2) в теле функции я бы переменную message_1 переименовал в messageFormatted,
так как называть переменную в теле функции тем же названием, 
что и параметр - плохая практика
*/

// если передать только один аргумент, а не два, то функция не сработает, выражение i < count никогда не будет true!
// чтобы решить эту проблему для параметров можно написать значение по умолчанию.
const globalMessage = "hello"

function logMessage_2(message, count = 1) { // указываем значение по умолчанию
    const messageFormatted = `(((${message})))`

    for (let i = 0; i < count; i++) {
        console.log(messageFormatted)
    }
}

logMessage_2(globalMessage) // если мы передадим значение для count, то изначальное значение не сработает, сработает переданное значение.

// пример значения параметров функции, проблема и решение
// мы хотим оставить стандартные значения параметров и дать аргумент для последнего параметра num5
function sumFiveNumbers(
    num5,
    num1 = 100,
    num2 = 200,
    num3 = 300,
    num4 = 400,
    // num5 - параметры без значения по умолчанию указывайте в начале!
) {
    const sum = num1 + num2 + num3 + num4 + num5

    console.log(`sum is: ${sum}`)
}

sumFiveNumbers(
    /**
     * undefined,
     * undefined,
     * undefined,
     * undefined,
     * 1000
     * оно выглядит ужасно и чтобы не городить подобное лучше написать num5 в начале 
     */
    1000 // так выглядит чище
)

// возврат значение и слово return
function sum(a, b) {
    return a + b // возвращаем результат сложения двух сущностей

    console.log("hello")
    console.log("bye")
}

// обернем в переменную
const result = sum(100, 1)
console.log(result)

// можно и без переменной
console.log(
    sum(100, 222)
)
/*
если убрать return из функции то она вернет undefined, функция возвращает результат всегда
если написать код после return то он никогда не выполнится
*/

// пример чуть сложнее
function getTypeAge(age) {
    if (typeof age !== "number") {
        return "age is incorrect!" // не закончится выполнение функции!
    }

    if (age < 1 || age > 125) {
        return "its unreal!" // таким образом можно досрочно закончить условие и вывести результат
    }

    if (age < 18) {
        return "loser"
    }

    return "adult" // все проверки были пройдены и мы возвращаем окончательный результат
}

// Проверяем работу паттерна Early Return:
console.log(getTypeAge("shower")) // "age is incorrect!"
console.log(getTypeAge(150)) // "it's unreal!"
console.log(getTypeAge(15)) // "loser"
console.log(getTypeAge(30)) // "adult"

// последний пример
function getSecretMessage(name) {
    // чтобы не было undefined при указании значения, делаем это
    if (!name) return

    // возвращаем наше name
    return `its you! ${name}`
}

console.log(
    getSecretMessage() // вернет undefined если не решить проблему, и все равно вернет undefined но контролируемый
)