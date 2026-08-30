// ключевое слово this позволяет получить доступ к контексту выполнения 
// данный код выведет в вкладке window множество свойств, функций и параметров
console.log("this global:", this)

// в зависимости от того где вызывается this результат будет разным 
// this будет ссылаться на один объект window
console.log("global this:", this)

// здесь ситуация совсем другая
function fn() {
    console.log('function this:', this)
}

fn()

// контекст this в методах объекта
// this ссылается на сам объект и выводит в данном примере три значения
const user_obj = {
    name: "gleb", 
    age: 13,

    // первая функция ссылается на весь объект user
    logThis: function() {
        console.log("this in the method of the user_obj object:", this)

        // таким образом можно получить свойство текущего объекта
        console.log("this.name:", this.name)
    },

    // Добавим новое свойство address 
    address: {
        city: "london",
        zipcode: 123456,

        // вторая функция ссылается на весь объект address
        logInnerThis: function() {
            console.log('this in the method of the address object:', this)
        },
    },
}

user_obj.logThis()
user_obj.address.logInnerThis()

// контекст this в стрелочных функциях
const arrowUser = {
    name: "gleb",
    age: 13,

    // используем arrow expression вместо function declaration
    logThisArrow: () => {
        // теперь this ссылается на общий window, так как теряется контекст выполнения.
        console.log('arrow func method:', this)
    },
    // поэтому приходится использовать function declaration для этих целей
    logThisDeclaration() {
        console.log("declaration func method:", this)
    },
}

// одинаковый this, разное значение
const user1 = { name: "Misha" }
const user2 = { name: "Vasya" }

function logInfo() {
    console.log("this:", this)

    // в данном случае будет пустая строка и в window будет name=""
    console.log('this:', this.name)
}

logInfo()

// Добавим по новому свойству. не добавляем ()
user1.logName = logInfo
user2.logName = logInfo

// вызываем функции
user1.logName()
user2.logName()
/*
user1 выведет misha, а user2 Vasya. 
контекст выполнения разный у обоих объектов.

контекст выполнения разный хоть и функция одна.
то что мы получим в this зависит от того, 
к какому контексту вызываемый this принадлежит.
*/

// решим задачу: объект-калькулятор. создать объект calculator с тремя методами: read(), sum(), mul().
const calculator = {
    read() {
        this.a = Number(prompt("enter first number:", 0))
        this.b = Number(prompt('enter second number:', 0))
    },
    sum() {
        return this.a + this.b
    },
    mul() {
        return this.a * this.b
    },
}

calculator.read()
console.log("calculator" ,calculator)
console.log("sum:" ,calculator.sum())
console.log("mul:" ,calculator.mul())

// еще одна задача: цепь вызовов
let ladder = {
    step: 0,
    up() {
        this.step++;
        return this
    },
    down() {
        this.step--;
        return this
    },
    showStep() {
        console.log("step:", this.step);
        return this
    },
}

// подобный вызов называется chaining (от слова цепь)
ladder.up().up().down().showStep().down().showStep()