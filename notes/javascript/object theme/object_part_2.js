/**
объект - это ссылочный тип данных
js хранит не примитивные значения (объекты) по ссылке на место в памяти
js выделяет для obj1 и obj2 собственную область в памяти. 
И у каждого объекта будет уникальная ссылка под каждый не примитивный объект. 
поэтому obj1 !== obj2
*/

// у них разная ссылка и область в памяти
const obj1 = { age: 10 }
const obj2 = { age: 10 }

console.log(
    // выведет false
    obj1 === obj2
) 

// в этом примере obj_2 не возьмет значение obj_1 они будут храниться в одной области памяти
const obj_1 = {
    name: "gleb",
    age: 67,
}
// записали ссылку на ту же область памяти
const obj_2 = obj_1

// проверяем то, что переменные находятся в одной области памяти
obj_2.name = "maxim"

console.log(obj_1)

// сравниваем obj_1 и obj_2
console.log(
    obj_1 === obj_2
    // выведет true, так как область памяти у них одна
)

// решение задачи с сравнением двух объектов
const object1 = {
    name: "alex",
    age: 28,

    // обычное плоское сравнение не сработает для объекта в котором внутри объект
    address: {
        city: "london",
        zipcode: "123456",
    },
}

const object2 = {
	name: 'alex',
	age: 28,

	// обычное плоское сравнение не сработает для объекта в котором внутри объект
	address: {
		city: 'london',
		zipcode: '123456',
	},
}

/**
эта проверка сработает с плоскими объектами, 
если класть в объекты еще объекты то проверка на эквивалентность не сработает, 
так как внутренние объекты будут сравниваться по ссылке и всегда вернут false.
areObjectsEqual выполняет поверхностное сравнение, 
если хочется применить глубокое сравнение, то необходим метод рекурсии, 
когда функция вызывает саму себя.
*/
const areObjectsEqual = (object1, object2) => {
    // встроенная функция object keys
	const keys1 = Object.keys(object1)
	const keys2 = Object.keys(object2)

    // чтобы получить кол-во объектов используем length
    console.log("keys1 length:", keys1.length)
    console.log('keys2 length:', keys2.length)

    if (keys1.length !== keys2.length) {
        return false
    }

    for (const key in object1) {
        if (object1[key] !== object2[key]) {
            return false
        }
    }

    return true
}

console.log(
    'object1 === object2?:', 
    areObjectsEqual(object1, object2)
)

// глубокое сравнение рекурсии
const areObjectsEqualDeep = (object1, object2) => {
	// встроенная функция object keys
	const keys1 = Object.keys(object1)
	const keys2 = Object.keys(object2)

	// чтобы получить кол-во объектов используем length
	console.log('keys1 length:', keys1.length)
	console.log('keys2 length:', keys2.length)

	if (keys1.length !== keys2.length) {
		return false
	}

    // перепишем этот цикл
	for (const key in object1) {
        const value1 = object1[key]
        const value2 = object2[key]
        const areValuesObjects = 
            typeof value1 === "object" && typeof value2 === "object"

        if (areValuesObjects) {
            // метод рекурсия. тяжелый но мощный метод.
            if (!areObjectsEqualDeep(value1, value2)) {
                return false
            } 
        } else if (value1 !== value2) {
            return false
        }
	}

	return true
}

console.log(
    'object1 === object2?:', 
    areObjectsEqualDeep(object1, object2),
)

// копирование объекта
// копирование из copy_obj_1 в copy_obj_2 через цикл
const copy_obj_1 = { name: "alex" }
const copy_obj_2 = {} 

for (const key in copy_obj_1) {
    copy_obj_2[key] = copy_obj_1[key]
}

copy_obj_2.name = 'maxim'

console.log('obj1: ', copy_obj_1)
console.log('obj2: ', copy_obj_2)

// чтобы не писать цикл каждый раз для этого придумали встроенный метод для копирования
const copy_object_1 = Object.assign({}, copy_obj_1)

// есть более короткий синтаксис для копирования объектов spread
const copy_object_2 = { ...obj1}

// merging objects объединение объектов
const merging_obj_1 = { name: "alex" }
const merging_obj_2 = {
	age: 52,

	// добавим объект address, который уже есть у merging_obj_3
	address: {
        city: "Moscow",
    },
}

// добавим третий объект в котором будет повторятся атрибут name, в таком случае примется name последнего объекта
const merging_obj_3 = {
	name: 'maxim',
	isDeveloper: true,

	// добавим объект address, который уже есть у merging_obj_2
	address: {
		zipcode: 123456,
	},
    
	/*
    и именно zipcode добавится в userSpread и userAssign, а name уберется
    потому что стандартными способами js объединяет и копирует поверхностно,
    чтобы сделать глубокое слияние объектов нужно писать свои рекурсии и библиотеки
    */
}

// объединяем объекты в один объект
const userAssign = Object.assign({}, merging_obj_1, merging_obj_2, merging_obj_3)

// можем так же использовать spread оператор
const userSpread = { ...merging_obj_1, ...merging_obj_2, ...merging_obj_3}

console.log("user:", userAssign, userSpread)