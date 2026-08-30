/*
класс - это многофункциональный шаблон для создания объекта.
он позволяет один раз создать правила по которым будут 
работать все объекты, созданные с помощью этого класса.
классы позволяют структурировать код и 
реализовывать очень гибкие и удобные связи в коде.
*/

// синтаксис class. создание класса
class Student {
	// тема: свойства класса
	// можно указать свойства класса вне конструктора
	#city
	planet = 'earth'
	country = 'USA'
	state = 'new-mexico'

	// статические свойства, можно работать без экземпляра
	static hasCat = true

	// почти любой класс должен иметь constructor
	constructor(name, age) {
		/*
        constructor - это специальный метод, который 
        выполняется автоматически при создании экземпляра класса.
        constructor необходим для инициализации объекта,
        простыми словами, для заполнения объекта какими-то
        начальными данными. формально он не всегда нужен.
        */
		this.name = name
		this.age = age

		// это нормальная практика
		this._someSecretAction()
	}
	/*
    если значение в свойстве будущего объекта зависит от данных, 
    которые приходят в момент инициализации класс, 
    то такое свойство нужно добавлять в конструкторе, 
    а если же мы заранее знаем какое значение будет в свойстве, 
    то мы можем объявить его вне конструктора!!
    */

	// методы класса. методы не нужно перечислять через запятую.
	logAge() {
		console.log(this.age)
	}

	// статический метод, можно работать без экземпляра
	static logAge() {
		const innerAge = 1488

		console.log(innerAge)

		/*
        статические свойства и методы работают без экземпляра,
        но их нельзя будет использовать в экземпляре.
        в статическом методе this работает по другому:
        В обычном методе (logAge) this указывает на конкретного студента (firstStudent).
        В статическом методе (static logAge) this указывает на весь класс целиком (Student).
        */
	}

	// эти два метода нужны для добавления кастомной логики
	// сеттер
	set city(value) {
		// в сеттере для заглавной буквы мы можем написать:
		const firstLetter = value[0].toUpperCase()
		const fromSecondLetter = value.slice(1).toLowerCase()

		this.#city = `${firstLetter}${fromSecondLetter}`
	}

	// геттер
	get city() {
		// здесь мы тоже улучшим метод get
		return `c. ${this.#city}`

		/*
        приватные свойства, методы: _city.
        таким образом принято выделять свойства и методы, 
        которые предназначены для использования 
        только в рамках объекта или класса.
        _city - это приватное свойство, 
        с которым работа напрямую вне 
        тела класса работать нельзя.
        ошибку _ не выдает, но есть
        способ элегантнее, меняем _ на #,
        и ошибка высвечивается.
        */
	}

	// мы хотим метод, который не работает вне тела класса:
	_someSecretAction() {
		// ...
	}
} 


// создадим объект для этого шаблона
const firstStudent = new Student('gleb', 67)

// это называется экземпляры класса student 
const secondStudent = new Student('josh', 69)

console.log('firstStudent:', firstStudent)
console.log('secondStudent:', secondStudent)

// мы можем обратиться к ним
console.log('firstStudent`s name:', firstStudent.name)
console.log('secondStudent`s name:', secondStudent.name)

// вызов методов класса
firstStudent.logAge()
secondStudent.logAge()

// геттеры и сеттеры
// под капотом - это сеттер
firstStudent.city = 'Moscow'

// под капотом - это геттер
console.log(firstStudent.city)

// это не нормальная практика! 
firstStudent._someSecretAction()

// обращаемся к статическим свойствам и методам
console.log('has cat:', Student.hasCat)
Student.logAge()

// наследование классов
class Person {
	constructor(name, age) {
        this.name = name
        this.age = age
    }

	eat() {
		console.log('eat...')
	}
	sleep() {
		console.log('sleep...')
	}
}

// extends (расширяться), чтобы унаследовать Person 
class Developer extends Person {
	// переопределение конструктора в наследуемом классе
    constructor(name, age, experience) {
        // берем name age с помощью super
        super(name, age)
        this.experience = experience
    }

	writeCode() {
		console.log('writing code...')
	}

	// мы можем переписывать методы
	sleep() {
		console.log('don`t wanna sleep, i will go writing code')
		this.writeCode()
	}
}

// наследуем developer
class frontendDeveloper extends Developer {
    makeFrontend() {
        console.log('writing frontend...')
    }

    // переписываем метод eat()
    eat() {
        // мы можем унаследовать с помощью super
        super.eat()
        console.log('watching youtube...')
    }
}

const exampleDeveloper = new Developer('gleb', 69)
const examplePerson = new Person('josh pork', 67, 5)
const exampleFrontendDeveloper = new frontendDeveloper('vasya', 1488, 5)

// вызываем методы
examplePerson.eat()
examplePerson.sleep()

exampleDeveloper.writeCode()
exampleDeveloper.sleep()

exampleFrontendDeveloper.eat()
exampleFrontendDeveloper.makeFrontend()