// чтобы выполнить определенное условие, есть if
const year = 2026

if (year === 2026) {
	console.log('yea!')
	console.log('its the best time to learn js :)')
} else if (year === 3000) {
    // добавляем else if для дополнительного условия
    console.log("too late, ai kill all peoples on the world :(")
} else {
	// добавляем else, если не сработает if
	console.log('its the worst time to learn js :(')
}

// для присвоения значений переменной используют тернарные операторы
const year_message = 2026
const message = year === 2026 ? "starting study" : "unknown year :/"

console.log(message)

const message_2 =
	year === 2026
		? 'start study'
		: year === 3000
			? 'ai wins, AI brutally exterminated all of humanity on Earth'
			: 'unknown year'

console.log(message_2)

// логические операторы
// ИЛИ ||:
// оператор переводит все на boolean и выбирает true
false || false // false
true || false // true
false || true // true
true || true // true

// пример использования
const age = 17
const withParent = true

if (age >= 18 || withParent === true) {
    console.log('Step into the methamphetamine shop.')
} else {
    console.log("you dont enter with parents and you dont 18 years old")
}

// оператор по порядку слева на право считывает значения переводит их в boolean, останавливается на true
const result = "" || false || null || undefined || 0 || "hello" || "bye"

console.log(result)
// если бы все операнды были бы false, то переменная взяла бы последнее значение

// И &&:
// если один или два или все аргументы false, то будет false, если все true, то будет true
console.log(false && false) // false
console.log(true && false) // false
console.log(false && true) // false
console.log(true && true) // true

// пример использования
let moneyInWallet = 5
let iceCreamPrice = 2
const isStoreOpen = true

if (moneyInWallet >= iceCreamPrice && isStoreOpen) {
    moneyInWallet -= iceCreamPrice

    console.log("get your meal as ice cream!")
} else if (moneyInWallet >= iceCreamPrice && isStoreOpen === false) {
    console.log("store is close")
} else {
    console.log("you legs broken, go away!")
}

// оператор И вычисляет все операнды слева на право по порядку, приводя все элементы к boolean
const result_2 = "hello" && true && 5 && null && 10

console.log(result_2)
// если в результате приведения будет false, то оператор останавливает работу, и все элементы возвращаются в значении первого false, если все true то переменная будет последним true

// прием с оператором И
const age_1 = 16
const isYoung = age_1 < 18

// isYoung && console.log("i want to saw you passport") *не рекомендуется*

if (isYoung) {
    console.log('i want to saw you passport')
}

// НЕ !:
console.log(!true) // false
console.log(!false) // true
console.log(!"") // true
console.log(!"hello") // false
console.log(!0) // true
console.log(!111) // false

// !! первым знаком true = false, вторым знаком false = true, краткая замена boolean, рекомендовано boolean вместо !!, а не наоборот
console.log(!!0) // false
console.log(!!1) // true

// комбинация навыков
const name = "maxim"
const age_2 = 20
const hasMuchMoney = false
const hasGoodJob = false
const hasMotivation = true
const hasFreeTime = true

// у оператора И приоритет вычисления выше чем у оператора ИЛИ
if (name !== "maxim") {
    console.log("you are not maxim")
} else if (age_2 <= 16) {
    console.log("It's too early for you to think about adulthood.")
} else if (
    !hasMuchMoney || 
    !hasGoodJob || 
    hasMotivation && hasFreeTime
) {
    console.log("maxim need to learn front-end")
} else {
    console.log("you very rich, or you have a good job, you dont need to learn front-end")
}

// оператор нулевого слияния:
const a = null
const b = 100

const result1 = a || b
const result2 = a ?? b

console.log(result1)
console.log(result2)
// если первый операнд не null и не undefined, то выражение даст значение первого операнда, если это не так то второго
// важно! || оператор останавливается и выводит false, а ?? останавливается на null или undefined, а не на false