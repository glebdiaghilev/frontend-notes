// чтобы показать информацию в всплывающем окне используем alert
// нельзя перечислить несколько сущностей! точнее можно, но выведется только первый
alert("hello!")

// можно передать сообщение из переменной
const message = "hello from message"

alert(message)

// в alert можно выполнять математические операции
alert(1 + 2 + 3)

// при выполнении alert код останавливается до закрытия окна
alert("hello 1")
console.log("hello 2")
alert('hello 3')
console.log('hello 4')
// alert можно использовать вместо console.log() для учебных целей

// prompt вызывает всплывающее окно с полем ввода
const useAge = prompt("how old are you?")

console.log(`years old: ${useAge}`)
// если пользователь нажал cancel то значение примет null

// пример использования
if (useAge >= 18) {
    console.log("access is allowed")
} else {
    console.log("access is denied")
}

// проблема и решение проблемы с prompt
const userAge = Number(prompt('how old are you?')) // приводим к цифре

if (userAge === 0) { // проверка не сработает если не будет +prompt или Number(prompt(...))
    console.log("this unreal...")
} else {
    console.log(`you years old: ${userAge}`)
}
// любое введенное значение через prompt приводится к строке, в данном примере мы строго сравнили строку и число, в итоге произошла ошибка 

// confirm вызывает всплывающее окно с текстом и двумя кнопками выбора. ok - true, cancel - false.
// используется для подтверждения каких-либо действий, результат выполнения confirm всегда boolean типа
const isUserReady = confirm("you ready?")

if (isUserReady) {
    console.log("starting!")
} else {
    console.log("okay... little bit waiting!")
}

// switch case operator
// switch case по-сути замена и альтернатива if-else
const age = +prompt("how old are you?")

// js сравнивает переменную из круглых скобок switch с case.
switch (age) { // берем переменную
    case 0: { // вариант 1
        console.log("this unreal...")
        break
    }
    case 18: { // вариант 2
        console.log("i want to saw you passport")
        break
    }
    case 1000: { // вариант 3
        console.log("are you vampire?")
        break
    }
    default: { // если не сработал ни один case то выполняется default
        console.log(`you aged is: ${age}`)
    }
}

// если мы хотим сравнить диапазоны, то пишем вместо переменной true
switch (true) {
    case age < 1: {
        console.log("this unreal...")
        break
    }
    case age === 18: {
        console.log('i want to saw you passport!')
        break
    }
    case age > 0 && age <= 12: {
        console.log(`you aged is: ${age}`)
        break
    }
    case age > 125: {
        console.log("are you vampire?")
        break
    }
    default: {
        console.log("incorrect age!") // Для default break не пишем - это бесполезно.
    }
}
// все случаи case сравниваются с true, например, если age > 1 будет true, то выполниться этот блок
// если в конце выполнения case не будет break то выполнятся все case автоматически, даже если они будут ложные
