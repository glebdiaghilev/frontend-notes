// бинарные операторы:
// обычные математические операции
console.log(2 + 3)
console.log(10 - 1)
console.log(5 * 10)
console.log(100 / 25)

// возведение в степень
console.log(2 ** 10)

// остаток от деления
console.log(13 % 5)
console.log(5 % 2)

// унарные операторы(-3, +4):
console.log(-10)

console.log(5 * -2 + 10 / -3)

// унарный плюс можно использовать для любого типа данных
console.log(typeof +'123')

console.log(+true)
console.log(+false)
console.log(+'123')
console.log(+' ')
console.log(+'')
console.log(+null)
console.log(+undefined)

//логическая проверка и использования унарной утилиты в практике
console.log(
	'3' + '5', // output: 35
	+'3' + +'5', // output 8
)

/*
 у справочника mdn есть таблица веса операторов, например унарный оператор плюс работает раньше бинарного плюса
*/

// пример:
const result = 1 + -2 - (3 * +'4') / 5 ** 2

/*
порядок обработки:

1) 1 + -2 - 3 * +"4" / 5 ** 2
2) 1 + -2 - 3 * 4 / 5 ** 2
3) 1 + -2 - 3 * 4 / 25
4) 1 + -2 - 12 / 25
5) 1 + -2 - 0.48
6) -1 - 0.48
7) -1.48
*/

console.log(result)

// присваивание значение с дополнительным действием
let count = 1

// плюс:
count = count + 2
count += 2

// минус
count = count - 2
count -= 2

// умножение:
count = count * 2
count *= 2

// деление:
count = count / 2
count /= 2

console.log(count)

/*
c конкастинацией строк это также работает
*/

// операторы инкремента и декремента
// декремент - это уменьшение значения числовой переменной на единицу
let count_1 = 10

count_1--
count_1--

console.log(count_1)

// инкремент - это увеличение значения числовой переменной на единицу
let count_2 = 10

count_2++
++count_2

console.log(count_2)

// разница в написании ++ перед и после переменной
let classicCount = 10
let newCount = ++classicCount

console.log(classicCount)
console.log(newCount)
// output: 11 11, при такой записи сначала js прибавляет 1 к classicCount, потом к newCount

let classicCount_1 = 10
let newCount_1 = classicCount_1++

console.log(classicCount_1)
console.log(newCount_1)
// output: 11 10, сначала newCount_1 принимает значение classicCount_1, потом прибавляет 1 к classicCount_1

// операторы сравнения
console.log(5 > 3) // true
console.log(10 < 1) // false
console.log(2 >= 2) // true
console.log(3 <= 0) // false
console.log(5 == 5) // true
console.log(5 !== 5) // false

// сравнение строк
console.log('а' < 'б')
console.log('ы' > 'f')
console.log('javascript' > 'java')

/*
в js строки сравниваются слева на право 
по-символьно в соответствии с их порядком 
следования в котировке UTF-8 unicode.
чем дальше символ в котировке, тем он весомее.

если символы сравниваемых строк идут одинаковые,
то js дойдет до неодинаковых значений и соответственно
javascript > java.
*/

// в js есть совсем не хорошая особенность, неявное сравнение
console.log('2' == 2)
console.log(3 == '3')
// такой код очень опасен и сравнивать разные типы данных не стоит
console.log(2 === 2)
console.log(3 === 3)
// это строгое сравнение, которое не даст сравнивать разные типы данных