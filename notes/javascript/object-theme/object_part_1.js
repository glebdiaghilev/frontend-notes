// объект самый сложный и самый важный тип данных в js, нужен для хранения не примитивных сущностей
const firstEmptyObject = {}
// или таким образом
const secondEmptyObject = new Object() // устаревший метод

// объект хранит набор свойств, набор пар
const user = {
    // первым пишется ключ, потом значение
    login: "iAmSuperhero",
    password: "qwerty",

    // если ключ имеет пробел то пишется через ""
    "registration date": "01.01.2024",
    "last-auth": "05.04.2024", 

    // значение может быть любым типом данных
    age: 33,
    isAdult: true,
    job: null,
    kids: undefined,
    address: {
        city: "Moscow",
        zipCode: 555444
    },
    sayHi: () => console.log("hello!")
}

// объект может записываться в одну строку
const user_1 = { login: "superhero", password: 123 }

// к объекту можно обратиться несколькими способами
console.log(
    user.login,
    user["registration date"]
)

user.sayHi()
// если обратиться к несуществующему свойству, то будет undefined
// добавление свойства объекту 
const user_2 = {}

user_2.name = "alexander"
user_2["is developer"] = true

console.log(user_2)

// попробуем изменить значения
user_2.name = "maxim"
user_2["is developer"] = true

console.log(user_2)

// можно удалить свойство из объекта
delete user_2.name
delete user_2["is developer"]
// если удалить свойство которого не существует то ничего не произойдет
delete user_2.age  

console.log(user_2)

// сокращенная запись свойства объекта
const name = "alex"
const age = 67

// если имя свойства совпадает с именем переменной то ее можно записать таким образом
const variable_user = {
    name,
    age,
}

console.log(variable_user)

// особенности имен свойств объектов
const obj = {
	// для имени свойства можно использовать число, но js посчитает это строкой
	123: 'example',

    // можно использовать даже зарезервированные слова
    const: "bla",
    let: "bla bla",
    for: "bla bla bla"
}

console.log(
    obj, 
    obj['123'],
)

// имена, как значения свойств, могут быть вычисляемыми
const propName = prompt("what name should be used there?")
const propValue = prompt("what value should written there?")

const obj_value_name = {
    // если для имени мы хотим использовать переменную, то обязательно используем []
    [propName]: propValue, 

    // в этих [] можно записать любое выражение
    [`bla-bla-${2 * 2}`]: true,
}

console.log(obj_value_name)

// проверка существования свойства в объекте
const user_3 = {
    name: "alex",
    age: 26,
}

// всегда будет boolean
console.log( "is developer" in user_3 ) // выведет false

// так делать не стоит ведь проверка будет некорректной и is developer: undefined будет обозначен как false
console.log( "is developer" !== undefined )

// перебор свойств через цикл
const me = {
    name: "gleb",
    age: 13,
    isDeveloper: true,
}

for (const key in me) {
    // получим имя свойства
    console.log(key)

    // получим значение свойства
    console.log(me[key])
}

// порядок свойств объекта
const numbers = {
    // добавим свойство в начале
    name: "alex",

    2: "second",
    1: "first",
    3: "third",

    // добавим свойство в конце
    age: 26,
}

for (const num in numbers) {
    console.log(numbers[num])
}
// output: first, second, third, alex, 26
// в devtools дополнительно может поменять местами alex и 26, так как сравнивает по длине имени свойства

/*
js при чтении объекта в начале сортирует свойства,
имена которых можно интерпретировать как целое число, 
после же числового порядка js выводит остальные свойства
*/