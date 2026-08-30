// получение размеров текущего окна viewport:
const htmlElement = document.documentElement

// хороший совет определение размеров окна
// ширина окна через document.documentElement
console.log('window width document.documentElement:', htmlElement.clientWidth)

// высота окна через document.documentElement
console.log('window height document.documentElement:', htmlElement.clientHeight)
/*
этот метод учитывает наличие скроллбара!

при позиционировании элементов в js
нам важно, чтобы полученные размеры
viewport соответствовали тому пространству,
которое мы целиком и полностью можем 
использовать, ну а так как мы не можем 
передвинуть dom элемент так, чтобы он залез
на полосу прокрутки нам нужно знать размеры
окна с вычетом полос прокрутки.
*/

// плохой совет определение размеров окна через window
// ширина окна через window
console.log('window width window:', window.innerWidth)

// высота окна через window
console.log('window height window:', window.innerHeight)
/*
этот метод не учитывает наличие скроллбара!
эти методы нас только путают
*/

// получение размеров страницы целиком:
// получение ширины страницы
console.log('page width:', htmlElement.scrollWidth)

// получение высоты страницы
console.log(
	'page height:',

	/*
    свойство scrollHeight иногда ведет себя
    странно и может показать некорректный
    результат, который иногда будет даже меньше,
    чем высота viewport.
    */
	htmlElement.scrollHeight,
)

// получение реальной высоты страницы
const bodyElement = document.body

const fullPageHeight = Math.max(
	htmlElement.clientHeight,
	htmlElement.scrollHeight,
	htmlElement.offsetHeight,
	bodyElement.clientHeight,
	bodyElement.scrollHeight,
	bodyElement.offsetHeight,
)

console.log('correct page height:', fullPageHeight)

// координаты текущего скролла страницы
console.log(
	'coordinates position of page scroll:',
	window.scrollX,
	window.scrollY,
)

// устаревшие ненужные методы, не стоит использовать
console.log(
	'coordinates position of page scroll:',
	window.pageXOffset,
	window.pageYOffset,
)

// программный скролл страницы
// более популярный метод
window.scroll({
	top: 200,
	behavior: 'smooth',
})

// менее популярный метод
window.scrollTo({
	top: 200,
	behavior: 'smooth',
})

// сделаем такую схему с скроллом
/*
первый скролл, вниз на 200 от верха страницы.
второй скролл, вниз на 100 от верха страницы.

сначала на 200, потом уже скролл идет вверх на 100
ведь выполнился второй скролл, который не 200, а 100
от верха страницы
*/
window.scroll({
	top: 200,
	behavior: 'smooth',
})

setTimeout(() => {
	window.scroll({
		top: 100,
		behavior: 'smooth',
	})
}, 2000)

// прокрутить страницу на N пикселей в одну сторону
window.scrollBy({
	top: 200,
	behavior: 'smooth',
})

setTimeout(() => {
    // чтобы это выполнить вызываем специальный метод
	window.scrollBy({
		top: 100,
		behavior: 'smooth',
	})
}, 2000)

// скролл страницы до видимости нужного элемента
const reviewsSectionElement = document.querySelector('#reviews')

// иногда это может не сработать поэтому оборачивают в таймер 
setTimeout(() => {
    reviewsSectionElement.scrollIntoView({
		behavior: 'smooth',

        // по умолчанию start
        block: 'center',
	})
}, 300)
// можно крутить по горизонтали, вместо block там inline 