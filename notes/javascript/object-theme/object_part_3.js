// проблема, бывает, что свойство может быть или не быть, иначе говоря опциональное свойство
const user = {
    name: "alex",
    age: 28,
    address: {
        // city: "moscow",
        zipcode: 123456,
    },
}

// если мы уберем address то выведется ошибка ведь js не может прочитать свойство city у сущности undefined
console.log(user.address.city) // выведет undefined если убрать только city

// этот код не выведется если мы задокументируем address ведь произошла критическая ошибка и js не сработал
console.log("some text wont be complete if address will be undefined")

// решение проблемы 
const user1 = {
	name: 'alex',
	age: 28,
	// address: {
	// 	city: "moscow",
	// 	zipcode: 123456,
	// },
}

// используем optional chaining operator
// буквально пишем условие, что если address существует и он объект то проходим дальше
console.log(user1.address?.city)

// и вот тогда наш последующий код сможет работать
console.log("awesome code work!")

// этот встроенный оператор в реальной работе используется очень часто. наглядный пример
const guest1 = {
    name: 'josh',
    age: 30,
    orderInfo: {
        roomType: 2,
        stayDates: {
            from: "11.03.2026",
            to: "21.04.2026",
        }
    },
}

const guest2 = {
    name: "liza",
    age: 21,
}

const logGuestInfo = (guest) => {
    // пишем мелкий оператор вместо большой проверки
    console.log(
        `name: ${guest.name}`
        `age: ${guest.age}`
        `date: ${guest.orderInfo?.stayDates?.to ?? "don`t chosen"}`
    )
}

logGuestInfo(guest1)
logGuestInfo(guest2)

// деструктуризация объекта. синтаксис деструктурирующего присваивания
const meAsUser = {
    name: "josh pork",
    age: 1488,
    isDeveloper: true,
}


/*
таким способом можно получить нужные значения в виде переменной 
const name = meAsUser.name
const age = meAsUser.age
const isDeveloper = meAsUser.isDeveloper
*/

// а можно так и это будет короче. такой метод работает и с объектами и с массивами 
const {
    // вводим существующие свойства
    name, 
    age,
    isDeveloper,

    // попытаемся создать несуществующее свойство
    address,
} = meAsUser

// выведем существующие свойства
console.log( name, age, isDeveloper ) 

// мы выведем в терминал несуществующий address и выведет undefined
console.log( "address:", address )

// деструктуризация в функции
// city, street, houseNumber, apartmentNumber прямо в address
const logAddress = (address) => {
    // чтобы не писать везде address для обращения к объекту и вытягивать аргументы мы сделаем так:
    const { city, street, houseNumber, apartmentNumber } = address

    console.log(`
        address:
        c. ${city}, st. ${street},
        h. ${houseNumber}, ap. ${apartmentNumber}    
    `)
}
// можно вообще не писать const и просто в аргументах написать { city, street, houseNumber, apartmentNumber }

// это плохой пример и легко запутаться
// logAddress(moscow, gleb, 122, 15)

// если в функции больше 3 параметров то пишут так:
logAddress({
    city: "moscow",
    street: "gleb",
    houseNumber: 122,
    apartmentNumber: 15,
})
// наш вариант является объектом соответственно в аргументах пишем название объекта

// с помощью деструктуризации можно переименовать сущность, которую мы вытягиваем из объекта
const dumb_user = {
    name: "poorest and skinny kevin",
}

const smartest_admin = {
    name: "the most fat and the most big boss ever!"
}

// выведет ошибку ведь name уже был объявлен, поэтому их можно переименовать
const { name: dumb_name } = dumb_user
const { name: smart_name } = smartest_admin

// интересная фишка. часто применяется в работе
const alex = {
    name: "alex",
    age: 28,
    city: "moscow",
}

const maxim = {
    name: "maxim",
    age: 5,
}

// можно указать значение по умолчанию если его нет в объекте
const { city = "incorrect" } = maxim

console.log("city", city)

// комбинация изученного
const me = {
    // my_city: "moscow",
}

const { my_city: userCity = "incorrect" } = me

console.log("my city:", userCity)

// остаточные rest параметры. используется очень часто
const logUser = (user) => {
    // остаточный параметр можно писать только в конце
    const { name_user, age_user, city_user, ...otherInfo } = user

    console.log(`
        name: ${name_user}
        age: ${age_user}
        city: ${city_user}
    `)

    console.log(`
        info about job: ${otherInfo}    
    `)
}

logUser({
    // мы это обязательно выведем
    name_user: "alex",
    age_user: 34,
    city_user: "moscow",

    // мы хотим вывести это но его нет в функции, используем метод
    company: "google",
    jobPost: "full-stack mobile dev devops system web browser software engineer"
})