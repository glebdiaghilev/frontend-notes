/*
сужение типов (narrowing)

представим, что у нас есть тип. мы объединили два 
множества: string, number. но в каком-то участке кода
мы хотим разъединить, и с числами - работать, как с числами,
а со строками - работать, как со строками.

способы сужения типов:
1. классическая проверка через typeof (type narrowing);
2. проверка на конкретное значение (literal narrowing);
3. проверка на имеющиеся поля (in-operator narrowing);
4. проверка через instanceof для классов (instanceof narrowing);
5. проверка через одинаковые поля с разным значением (discriminated union narrowing).

type narrowing:
классическая проверка через typeof, с помощью if-else мы
просто проверяем тип, работает с определенными типами.

literal narrowing:
похожая на первую проверку проверка, с помощью if-else
мы проверяем arg на определенное значение.

in-operator narrowing:
проверка на имеющиеся поля, мы проверяем, есть ли у
arg определенное поле, и ts сам понимает с каким
объектом мы работаем.

instanceof narrowing:
этот способ работает только с классами. через instanceof
мы сужаемся до нужного класса.

discriminated union narrowing:
с помощью этого способа, можно работать с разными типами,
у которых есть одинаковое поле, но у этого поля у каждого
типа разное значение.
пример: у нас есть несколько типов, которые объединяются
в один через union. для того чтобы нам их друг от друга
отличать, необходимо добавить какое-то поле, которое
однозначно будет каждый из типов идентифицировать.
*/
// классический способ: проверки через typeof
function fn(arg: number | string | null) {
	// сужаем типы
	if (typeof arg === 'number') {
		// здесь используем методы для number
		arg.toFixed()
		return
	} else if (typeof arg === 'string') {
		// здесь используем методы для строк
		arg.toUpperCase()
		return
	}

	return arg
}

// способ проверки на значение
function fn2(arg: number | string | null) {
	// сужаем типы
    // проверяем на null значение
	if (arg === null) {
        arg
    }

    // проверяем на значение 5
    if (arg === 5) {
        arg.toExponential()
    }

	return arg
}

// способ с проверкой на имеющиеся поля
interface User {
    username: string;
    age: number;
}

interface Person {
    lastName: string;
    firstName: string;
    age: number;
}

function fn3(arg: User | Person) { 
    // сужаем объекты
    // сужаем до объекта User
    if ('username' in arg) {
        // работаем с User
        arg
    }

    // сужаем до объекта Person
    if ('firstName' in arg) {
        // работаем с Person
        arg
    }

    arg
}

// способ, работает только с классами
class BmwClass {
    bmwDrive() {

    }
}

class AudiClass {
    audiDrive() {

    }
}

const bmw = new BmwClass()
const audi = new AudiClass()

function fn4(arg: BmwClass | AudiClass) {
    // сужаем классы
    // сужаем до класса Bmw
    if (arg instanceof BmwClass) {
        arg.bmwDrive()
    } else {
        // сужаем до класса Audi
        arg.audiDrive()
    }
}

// проверка типа с использованием одного поля
interface BaseCar {
    maxSpeed: number;
    weight: number;
}

interface Bmw extends BaseCar {
    type: 'bmw';
    bmwField: string;
}

interface Audi extends BaseCar {
	type: 'audi';
	audiField: string;
}

type Car = Audi | Bmw;

function fn5(arg: Car) {
    // сужаем типы
    switch(arg.type) {
        case 'audi':
            // работаем с типом audi
            arg.audiField
            break
        case 'bmw':
            // работаем с типом bmw
            arg.bmwField
            break
        default:
            const exhaustiveCheck: never = arg;
            return arg
    }

    arg
}