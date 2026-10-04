/*
type guards сужение типов.
type guard - это любой механизм, который позволяет 
как-то сузить типы. мы разберем пользовательские
type guards, которые мы пишем самостоятельно в виде
отдельных функций
*/
interface Car {
    maxSpeed: number;
    width: number;
}

interface BMW extends Car {
    type: 'bmw';
}

interface Audi extends Car {
    type: 'Audi';
}

interface Person {
    age: number;
    name: string;
}

// это type guards с discriminated union narrowing:
function isBmw(value: BMW | Audi): value is BMW {
    return value.type === 'bmw'
}

// это type guards:
function isCar(value: Car | Person): value is Car {
    return 'maxSpeed' in value && 'width' in value
}

function isPerson(value: Car | Person): value is Person {
    return 'age' in value && 'name' in value
}

function fn(data: Car | Person) {
    // используем функции:
    if (isCar(data)) {
        // здесь работа с Car
        data.maxSpeed = 1
    } else {
        // здесь работа с Person
        data.age = 1
    }

    if (isPerson(data)) {
		// здесь работа с Person
		data.name = 'gleb'
	} else {
		// здесь работа с Car
		data.weight = 23
	}
}
