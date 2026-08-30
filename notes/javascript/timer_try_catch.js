// timer тема:
// за отложенное выполнение кода выполняет функция:
setTimeout(() => {
    alert('2 seconds')
}, 2000)

// у setTimeout может больше двух аргументов
const logMessage = (name, age) => {
    alert(`hi! my name is ${name}, ang im ${age} years old.`)
}

// указываем имя и возраст
setTimeout(logMessage, 2000, 'gleb', 67)

// иногда нужно отменить действие таймера
const deniedMessage = () => {
    alert('some message')
}
// чтобы удалить settimeout нужно знать id, внесем это в переменную
const timerId = setTimeout(deniedMessage, 3000)

clearTimeout(timerId)

// мы хотим выполнять код постоянно, допустим раз в секунду
const intervalId = setInterval(() => {
    console.log('hi!')
}, 1000)

// чтобы остановить setInterval:
// clearInterval(intervalId)

// если хотим чтобы setInterval шел 5 секунд:
setTimeout(() => {
    clearInterval(intervalId)
}, 5000)

// setInterval не гарантирует, что предыдущий вызов кода завершился 
// setInterval не ждет, он прет напролом:

// setInterval(() => {
//     alert('message')
// }, 2000)

// если мы хотим, чтобы он напролом не шел:
setTimeout(function logMessage() {
    alert('message')

    setTimeout(logMessage, 1000)
}, 1000)

// если аргумент не передать или поставить 0, 
// то он выполнится последним после всех инструкций

// try catch тема:
// в коде могут возникать ошибки
console.log('code start...')

const userData = undefined

// чтобы ловить ошибки пишем так:
try {
    // пробуем выполнить код
    const names = undefined

    names.forEach(name => {
		console.log('name:', name)
	})
} catch (error) {
    // обрабатываем возникшую ошибку
    console.log('error:', error)
}

console.log('code end...')

// try catch может обработать синтаксис js, но не может обработать мусор
try {
    // 25%^*&^%^&*We{(*&)} - не обработает  
} catch (error) {
    console.log('error:', error)
}

// try catch не может словить баги в асинхронном коде
// чтобы он сумел нужно отформатировать код так:
console.log('code start...')

setTimeout(() => {
    try {
        const names = undefined 

        names.forEach((name) => {
            console.log('name:', name)
        })
    } catch (error) {
        // на самом деле error - это объект
        // это полная ошибка
        console.log('full error:', error)

        // это имя ошибки
        console.log('name:', error.name)

        // это сообщение с пояснением ошибки
        console.log('message:', error.message)

        // это полная информация об ошибке со стеком вызовов
        console.log('stack:', error.stack)
    }

    console.log('code end...')
}, 3000)

// throw - генерация кастомной ошибки.
// бывает формально ошибка есть, но js ошибку не воспринимает
console.log('code start...')

try {
    const userJSON = `{
        age: 28
    }`

    const user = JSON.parse(userJSON)
    const {name, age} = user 

    // нужно добавить проверку, чтобы name не был undefined
    if (!name) {
        // создаем свою ошибку
        // throw 'user doesn`t enter his name!' - так не делают

        // в js есть специальные объекты для работы с ошибками
        const errorMessage = 'user doesn`t enter name'

        throw new Error(errorMessage)
    }

    console.log(`
        hi, ${name}!
        you age - ${age}, is not true?    
    `)
} catch (error) {
    console.log('error:', error)
}

console.log('code end...')

// finally - опциональный блок, выполняется при любом раскладе
try {
    const names = ['alex', 'gleb,', 'josh', 'kevin']

    names.forEach((name) => {
        console.log('name:', name)
    })

    console.log('code in block try incredible')
} catch (error) {
    console.log('error:', error)
} finally {
    console.log('hello!')
}