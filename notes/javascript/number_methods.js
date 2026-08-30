// методы у примитивных типов данных
const price = 99.99

// при выполнении этого кода js создал временную объект-обертку.
// он исполнил, запустил метод tofixed(0) и удалил временный объект
const roundedPrice = price.toFixed(0)

console.log("rounded price:", roundedPrice)

// метод числа toFixed() округляет число 
const priceWasNeedToFix = 99.555

// значение по умолчанию 0
console.log("round to 0:", priceWasNeedToFix.toFixed())

// можем указать сколько угодно знаков
console.log('round to 1:', priceWasNeedToFix.toFixed(1))
console.log('round to 2:', priceWasNeedToFix.toFixed(2))

// js позволяет обращаться к числам напрямую
// работает только для целых чисел
console.log(5..toFixed(2))
// работает и для чисел с остатком
console.log((5.011).toFixed(2))

// если этот метод применить к числу у которого меньше знаков после запятой чем в аргументе, то добавятся нули
console.log(100..toFixed(2)) // 100.00

// метод toPrecision(). округляет числа
const num_precision = 100.55

// округляет от начала слева-направо
console.log(num_precision.toPrecision(4)) // 100.1

// округляет справа-налево
console.log(num_precision.toFixed(4)) // 100.0550

// метод чисел tostring(). приводит к строке
const numWantToBeString = 100
const variableMakeNumHappy = numWantToBeString.toString()

console.log("num:", numWantToBeString) // 100
console.log("num as string", variableMakeNumHappy) // 100

console.log(typeof numWantToBeString) // number
console.log(typeof variableMakeNumHappy) // string

// неочевидный функционал toString()
const numAsNum= 100

console.log(
    // по умолчанию будет человеко-понятная версия
    `number ${numAsNum} in 0/1:`,

    // если передать, например, 2, то число будет в двоичной системе счисления
    numAsNum.toString(2)
)

// объект math
console.log(Math) 

// для получения случайного числа используем math.random()
console.log("random number:", Math.random())

// чтобы получить случайное число в конкретном диапазоне ищем: "math.random js", и берем решение.

// для получения абсолютного значения используем math.abs
console.log(Math.abs(-1)) // 1

// для возведения в степень используем math.pow
console.log(Math.pow(2, 10))
console.log(2 ** 10)

// позволяет получить квадратный корень
console.log(Math.sqrt(16))

// позволяет получить кубический корень
console.log(9)

// функции min и max, вычисляют и возвращают минимальное и максимальное число
console.log(Math.min(-1, 1, -5, 10, 100, 1000, 1111))
console.log(Math.max(-1, 1, -5, 10, 100, 1000, 1111))

// а вот нельзя, исправить можно только если добавить ...!
const numbers = [1, 2, 3, 4]

console.log( Math.min(...numbers) )

// округление чисел
// метод round округляет число до ближайшего целого по стандартным правилам
console.log(Math.round(3.49))

// метод floor округляет число до ближайшего целого вниз
console.log(Math.floor(3.49))

// метод ceil округляет число до ближайшего целого вверх
console.log(Math.ceil(-3.49))

// метод trunc округляет число до целого в меньшую сторону без учета знака числа. положительное вниз, отрицательное вверх.
console.log(Math.trunc(-3.49))

// парсинг числа. для таких случаев есть метод
const numberAsString = "100px"
const floatAsString = "100.5px"

// не учитывает цифры после точки
console.log( parseInt(numberAsString) )

// учитывает цифры после точки
console.log( parseFloat(floatAsString) )

// есть у методов особенности. для них используют регулярные выражения (в будущем)
const numAsString = "   a100.5px"

console.log( parseInt(numAsString) )
console.log( parseFloat(numAsString) )