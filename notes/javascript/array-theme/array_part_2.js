// преобразование строки к массиву 
const splitMessage = "one, two, three, four, five, six, seven"

console.log(
    splitMessage.split(', ').join(', ')
    /*
    в промежутке между преобразованием строки к массиву 
    и обратной склейки обычно что-то удаляют или добавляют.
    циклом проходятся по массиву и что-нибудь проверяют, 
    а потом возвращают обратно в строку через join.
    */
)

// копирование массивов. массивы нельзя просто скопировать.
const copyArray = ['A', 'B', 'C']
const copyArrayFor = []

// так в разы удобнее
const copyArraySpread = [...copyArray]

// можно сделать с помощью slice
const copyArraySlice = copyArray.slice()

// скопируем все через цикл. делать это вручную неудобно!
for (let i = 0; i < copyArray.length; i++) {
    copyArrayFor.push(copyArray[i])
}

// меняем массивы
copyArraySpread[0] = "-"
copyArrayFor[0] = '_'
copyArraySlice[0] = '+'

// вызываем наши массивы
console.log( 'copy arr1:', copyArray )
console.log( 'copy arr2:', copyArrayFor )
console.log( 'copy arr3:', copyArraySpread )
console.log( 'copy arr4:', copyArraySlice )

// метод slice позволяет вырезать не только весь массив, но и его часть
const sliceArray = ['A', 'B', 'C']

// мы получим элементы с 0 до 2 индекса
const pieceArray_1 = sliceArray.slice(0, 2)

// мы можем получить один элемент с конца 
const pieceArray_1 = sliceArray.slice(-1)

// объединение массивов
const joinArray1 = ['A', 'B']
const joinArray2 = ['C', 'D']

// объединяем массивы spread
const totalArray = [...joinArray1, ...joinArray2]

// объединяем массивы concat
const concatArray = joinArray1.concat(joinArray2)

console.log(
    totalArray,
    concatArray,
)

// сравнение массивов
const compareArray1 = ['A', 'B', 'C']
const compareArray2 = ['A', 'B', 'C']

const areArraysEqual = (array1, array2) => {
    if (array1.length !== array2.length) {
        return false 
    }

    for (let i = 0; i < array1.length; i++) {
        const value1 = array1[i]
        const value2 = array2[i]

        // чтобы проверить является ли сущность массивом пишем так:
        const areValuesArrays = 
            // есть специальный array где есть isArray
            Array.isArray(value1) && Array.isArray(value2)

        if (areValuesArrays) {
            if (!areArraysEqual(value1, value2)) {
                return false 
            } else {
                continue
            }
        }

        if (value1 !== value2) {
            return false 
        }
    }

    return true 
}

console.log( areArraysEqual(compareArray1, compareArray2) )

// вручную проверять и сравнивать массивы - дело неблагодарное, есть библиотеки.

// деструктуризация значений из массива 
const destructuringData = ["gleb", 67]

// если поменять местами name и age то будет калл
const [name_data, age_data] = destructuringData

console.log(name_data, age_data)
