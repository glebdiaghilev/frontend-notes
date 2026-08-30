// мы можем обращаться к свойству style
const boxElement = document.querySelector('.box')

console.log(
    // огромный объект со всеми свойствами
    boxElement.style
)

// изменение значения свойств напрямую
boxElement.style.position = 'absolute'
boxElement.style.top = '40px'
boxElement.style.left = '80px'

// изменение уже имеющихся свойств
boxElement.width = '200px'
boxElement.borderWidth = '200px'

// задаем стили группой из нескольких свойств
// перезаписываем имеющиеся атрибуты css style, height пропадет
// если мы хотим добавить свойства, а не перезаписать, то пишем +=
boxElement.style.cssText += `
    position: absolute;
    top: 40px;
    left: 80px;
    width: 150px;
    border-width: 10px;
`


// проблемы при работе с style
/* 
если мы в консоли хотим посмотреть, что у нас содержится
в элементе box-1, мы обнаружим, что, например, в свойстве
width значение - пустая строка, но если мы обратимся
к свойству width напрямую, мы не увидим адекватного значения
*/
const secondBoxElement = document.querySelector('.box-1')

console.log(
    // width будет пустым
    secondBoxElement.style
)

console.log(
    // будет пусто
    'width value in secondBoxElement:',
    secondBoxElement.style.width
)
/*
свойство DOM элемента style ориентируется только на 
инлайновые стили, иначе говоря на стили элемента в его
атрибуте style, style не берет в расчет то, что стили
для элемента могут быть написаны где-нибудь еще 
*/

// получение реального значения css свойства dom элемента
console.log(
	// эта функция из глобального window
	'styles of secondBoxElement:',
	getComputedStyle(secondBoxElement),
    // все то же, что и в devtools
)

// наконец можно получить реальное значение свойства
console.log(
    'width value in secondBoxElement:',
    getComputedStyle(secondBoxElement).width
)

// получаем css параметры псевдоэлемента
console.log(
    'box-1::after styles:',
    getComputedStyle(secondBoxElement, '::after').textDecoration
)

// манипулирование css классами

// выведем класс в консоль в виде объекта
console.dir(
    /*
    здесь нет свойства class, зато есть className,
    и classList. свойства class нет, потому что когда-то
    в js слово class нельзя было использовать в качестве
    имени свойства объекта, так как это было 
    зарезервированое слово, сейчас таких ограничений нет.
    исторически за class отвечает className
    */
    secondBoxElement
)

/*
неудобно и неправильно:
можно напрямую изменить свойство className
secondBoxElement.className = ' red'
или добавить класс с +=, но добавить пробел
secondBoxElement.className += ' red'
очень неудобный метод, нужно манипулировать иначе
*/

// манипулирование классами через classList
console.log(
    // выведет обычную структуру данных
    secondBoxElement.classList
)

// специальные методы для работы с classList
// добавить класс
secondBoxElement.classList.add('red', 'big')

// удалить класс
secondBoxElement.remove('big')

// нет класса - добавляет класс, есть класс - удаляет
secondBoxElement.classList.toggle('red')

// сюда можно добавлять условия
// добавлять red, если hasError = true
const hasError = true

secondBoxElement.classList.toggle('big', hasError)
// удобен для индикации состоянии (active на бургер кнопке)

// проверяет, имеет ли элемент определенный класс (true, false)
console.log(
    // false
    secondBoxElement.classList.contains('box')
)

console.log(
    // false
    secondBoxElement.classList.contains('money')
)

// управление css переменными через js
const thirdBoxElement = document.querySelector('.box-2')

// меняем значение переменной
thirdBoxElement.style.setProperty('--border-color', 'blue', 'important')
// может менять любое свойство, лучше использовать только для переменных
