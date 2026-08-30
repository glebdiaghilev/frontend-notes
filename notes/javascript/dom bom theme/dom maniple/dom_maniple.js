// чтение содержимого элемента
const boxElement = document.querySelector('.box')

// текстовое содержимое элемента
console.log('text content in boxElement:', boxElement.textContent)

const firstParagraphElement = document.querySelector('.paragraph-1')

console.log(
	'text content in first paragraph:',
	firstParagraphElement.textContent,
)

// мы можем изменить значение текстового элемента
firstParagraphElement.textContent = 'updated first element'

firstParagraphElement.textContent += ' plus new text'

/*
изменять значение textContent у dom элементов
с дочерними элементами стоит с особой осторожностью.
мы буквально перезаписываем все содержимое.

textContent не позволяет вставить html разметку, 
строку с какими-то тегами. 

textContent не видит конструкцию тегов, а innerHTML наоборот.
*/

// манипулировать разметкой - innerHTML
console.log('html content of boxElement:', boxElement.innerHTML)

boxElement.innerHTML += `
    updated text
    <p>new paragraph</p>
`

// то же что и innerHTML, но помимо
// элементов внутри еще и сам элемент
console.log('html content of boxElement, include itself:', boxElement.outerHTML)

// это не совсем правильно, и довольно долгая операция
boxElement.outerHTML += `
    <article>123</article>
`

/*
innerHTML перезаписывает содержимое, как никак,
даже если добавить +=, чем больше элементов, тем
тяжелее операция, чтобы решить эту проблему
нужно знать как создать элемент.
*/

// создание элемента:
// этот метод возвращает новый элемент
const newParagraphElement = document.createElement('p')

// добавим внутреннее содержимое и css класс
newParagraphElement.textContent = 'fourth paragraph'
newParagraphElement.classList.add('paragraph-4')

console.log(newParagraphElement)

// добавление элемента в dom:
// добавление в конец элемента box
boxElement.append(newParagraphElement)

// добавление в начало элемента box
boxElement.prepend(newParagraphElement)

/*
методы before и after - эти методы 
добавляют элементы до и после элемента
к которому элемент был применен

before - элемент буквально создается до boxElement
after - элемент буквально создается после boxElement
*/
// before метод
boxElement.before(newParagraphElement)

// after метод
boxElement.after(newParagraphElement)

// заменить один элемент на другой
firstParagraphElement.replaceWith(newParagraphElement)

// особенности createElement
const firstBoxElement = document.querySelector('.box-1')
const secondBoxElement = document.querySelector('.box-2')
const thirdBoxElement = document.querySelector('.box-3')
const fourthBoxElement = document.querySelector('.box-4')
const fifthBoxElement = document.querySelector('.box-5')

/*
если бы у нас не было функции, и мы 
оперировали единственным созданным
элементом secondNewParagraphElement, то после
первой инструкции со вставкой через append 
новый элемент параграфа бы кочевал из одного 
места dom дерева в другое, мы бы в devtools увидели
бы результат выполнения последней функции replaceWith.

после того как мы в js создали новый элемент и вставили
его в dom дерево, стоит с осторожностью продолжать 
оперировать переменной dom элемента, так как в ней
сохраняется ссылка на уже вставленный в dom дерево элемент.
*/
const getNewParagraphElement = () => {
	const newParagraphElement = document.createElement('p')

	newParagraphElement.textContent = 'new paragraph'

	return newParagraphElement
}

const getNewArticleElement = () => {
	const newArticleElement = document.createElement('article')

	newArticleElement.textContent = 'new element <article>'

	return newArticleElement
}

// в аргументы этих методов можно перечислять два и более элемента
firstBoxElement.append(getNewParagraphElement(), getNewArticleElement())
secondBoxElement.prepend(getNewParagraphElement(), getNewArticleElement())
thirdBoxElement.before(getNewParagraphElement(), getNewArticleElement())
fourthBoxElement.after(getNewParagraphElement(), getNewArticleElement())
fifthBoxElement.replaceWith(getNewParagraphElement(), getNewArticleElement())

// мы можем вставить и обычную строку
const justText = 'just text'

firstBoxElement.append(justText)
secondBoxElement.prepend(justText)
thirdBoxElement.before(justText)
fourthBoxElement.after(justText)
fifthBoxElement.replaceWith(justText)

// вставить строку содержащую html разметку
const paragraphThreeElement = document.querySelector('.paragraphThree')
const paragraphFourElement = document.querySelector('.paragraphFour')
const paragraphFiveElement = document.querySelector('.paragraphFive')

const newParagraphElementMarkup = '<p>just text</p>'

// эти методы не в коем случае не замена, это другие способы вставки
// этот метод может вставить только один элемент
// вставляем элемент в начало box-1
firstBoxElement.insertAdjacentHTML('afterbegin' ,newParagraphElementMarkup)

// вставляем элемент в конце box-2
secondBoxElement.insertAdjacentHTML('beforeend', newParagraphElementMarkup)

// вставляем элемент перед paragraphThree
paragraphThreeElement.insertAdjacentHTML('beforebegin', newParagraphElementMarkup)

// вставляем элемент после paragraphFour
paragraphFourElement.insertAdjacentHTML('afterend', newParagraphElementMarkup)

// замена и вставка
// paragraphFiveElement.outerHTML = newParagraphElementMarkup

// удалить элемент из dom дерева 
const secondFirstBoxElement = document.querySelector('.first-box')

// удаление элемента
// firstBoxElement.remove()

// клонирование элемента:
// поверхностное клонирование
const firstBoxElementClone = secondFirstBoxElement.cloneNode()

// глубокое клонирование
const firstBoxElementDeepClone = secondFirstBoxElement.cloneNode()

/*
элемент добавился, но его содержимое 
пустое - это не ошибка, а особенность
cloneNode(), произошло поверхностное клонирование,
которое не учитывает внутреннее содержимое элемента,
чтобы выполнить глубокое клонирование, нужно передать
в параметры true
*/
secondFirstBoxElement.after(firstBoxElementClone)
secondFirstBoxElement.after(firstBoxElementDeepClone)

// передвижение элементов:
const secondThirdBoxElement = document.querySelector('.third-box')

/*
с помощью нам известных методов
мы можем перемещать элементы куда угодно.
*/
secondThirdBoxElement.after(secondFirstBoxElement)