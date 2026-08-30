// события мыши
/*
когда речь идет о событиях мыши, то имейте ввиду
что мобильное устройство фактически имитирует те же
самые события, поэтому если мы нацепим на элемент 
обработку события click, то и нажатие по элементу
на устройстве с тачскрин будет равносилен клику мышкой.
*/
const buttonElement = document.querySelector('.button')

// движение мыши в рамках элемента
buttonElement.addEventListener('mousemove', () => {
	console.log('mouse move on button element')
})

// курсор наведен на элемент
buttonElement.addEventListener('mouseover', event => {
	console.log('mouse over on button element')

	// свойства mouseover
	// target - это элемент на который навели курсор
	console.log('target:', event.target)

	// это элемент с которого курсор ушел
	console.log('relatedTarget:', event.relatedTarget)
})

// курсор увели с элемента
buttonElement.addEventListener('mouseout', event => {
	console.log('mouse out of button element')

	// свойства mouseout
	// это элемент с которого курсор ушел
	console.log('target:', event.target)

	// это элемент на который курсор перешел
	console.log('relatedTarget:', event.relatedTarget)
})

/*
сдвигаем немного кнопку в стилях,
наводим мышь на кнопку и уводим 
влево за пределы окна браузера, в
relatedTarget теперь null.

иметь ввиду, что если мы ведем курсор на элемент
прямиком через границы окна браузера или же уводим
курсор с элемента на границу браузера, то если 
визуально между элементом и границей окна браузера
нет других элементов, в relatedTarget будет значение
null.
*/
// особенность при работе с движением мыши
const bestButtonElement = document.querySelector('.button2')

bestButtonElement.addEventListener('mouseout', event => {
	console.log('mouse out of button element')

	/*
    если навести мышь на кнопку и затем выводить 
    курсор, то несмотря на то, что курсор находится
    внутри box-3, и курсор явно должен попадать на 
    box-3, в relatedTarget будет null, это происходит
    потому, что браузер проверяет позицию курсора не так
    быстро, как мы сейчас вывели курсор с элемента. 
    */
	console.log('relatedTarget:', event.relatedTarget)
})

// еще одна особенность mouseover mouseout
const secondBoxElement = document.querySelector('.box-2')

secondBoxElement.addEventListener('mouseover', event => {
	console.log('cursor on box-2')

	// target - ожидаемое box-2
	console.log('target:', event.target)

	// relatedTarget - элемент box-1
	// или box-3 от движения мыши
	console.log('relatedTarget:', event.relatedTarget)
})

secondBoxElement.addEventListener('mouseout', event => {
	console.log('cursor not on box-2')

	// target - ожидаемое box-2
	console.log('target:', event.target)

	// relatedTarget - элемент box-1
	// или box-3 от движения мыши
	console.log('relatedTarget:', event.relatedTarget)
})

/*
наведем курсор на box-2 и вроде как
обработчики работают, но теперь мы уведем
курсор с box-2 на box-3 и теперь нам выходит 
сообщение, что курсор на box-2, хотя он на
box-3
*/

// если особенности методов мешают, то есть альтернатива
// курсор наведен на элемент
secondBoxElement.addEventListener('mouseenter', () => {
	console.log('cursor on the box-2')
})

// курсор увели с элемента
secondBoxElement.addEventListener('mouseleave', () => {
	console.log('cursor not on the box-2')
})
/*
эти методы не учитывают движение 
курсора по дочерним элементам.
*/

// нажатие мыши
const mouseButtonElement = document.querySelector('.button-mouse')

// когда нажали левую кнопку мыши и не отпустили
mouseButtonElement.addEventListener('mousedown', event => {
	console.log('1. mousedown', event.target, event.currentTarget)
})

// когда отпустили левую кнопку мыши
mouseButtonElement.addEventListener('mouseup', event => {
	console.log('2. mouseup', event.target, event.currentTarget)
})

// когда нажали на кнопку
mouseButtonElement.addEventListener('click', event => {
	console.log('3. click', event.target, event.currentTarget)
})
/*
порядок: mousedown -> mouseup -> click
не сработает mousedown не сработает и mouseup.
*/

const blueBoxElement = document.querySelector('.box-4')

// когда дважды нажали мышью
blueBoxElement.addEventListener('dblclick', () => {
	console.log('double click')
})

// когда нажали правой клавишей мыши
blueBoxElement.addEventListener('contextmenu', event => {
	event.preventDefault()
	console.log('contextmenu')
})

/*
у touchscreen есть свои специфичные события:
touchmove, touchstart, touched. 
*/