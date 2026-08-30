// покажет html
console.log(document)

// покажет внутренности
console.dir(document)

// есть парочку свойств
console.log(document.documentElement)
console.log(document.head)

// браузер может и не обнаружить body, null
console.log(document.body)

/*
опыт:
мы получаем body при вызове скрипта в body.
мы переместим вызов скрипта из body в head,
в результате получаем null, почему?
браузер проанализировал и запустил скрипт 
раньше чем обработал дальнейшую разметку 
в частности элемент body, и на момент 
выполнения скрипта в document body фактического 
элемента для браузера нет, аналогичная ситуация 
будет при обращении к любым элементам разметки, 
которые внутри body. 
решение проблемы:
1. разместить скрипт строго в body 
2. оставляем скрипт в head, но дополнительно
добавим этому элементу атрибут defer:
<script src="dom.js" defer></script>,
атрибут defer (дождаться) гарантирует, 
что скрипт дождется когда вся остальная разметка 
будет готова, а потом уже скрипт запуститься.

атрибут async:
<script src="dom.js" async></script>, 
с помощью него мы говорим браузеру,
чтобы он загружал и выполнял скрипт асинхронно.

зачем async:
async добавляют к скриптам в коде которых нет 
необходимости мгновенно обращаться к элементам DOM
дерева, и тем скриптам в целом не важен порядок 
выполнения относительно остальных подключаемых 
скриптов.
чаще всего его добавляют к скриптам, которые
собирают разного рода поведенческие метрики
пользователя: скрипт google аналитики.
async может выполнится как и до, и после
загрузки dom дерева.
*/

// у body есть свойства
// сам элемент body
console.log('body element:', document.body)

// родительский элемент над body
console.log('parent element of body:', document.body.parentElement)

// соседний элемент перед body
console.log(
	'adjacent element before body:',
	document.body.previousElementSibling,
)

// соседний элемент после body
console.log('adjacent element after body:', document.body.nextElementSibling)

// список дочерних элементов body
console.log('child element of body', document.body.children)

// выводим дочерние элементы и получаем html collection
/*
html collection не массив и не объект, 
а именно HTMLCollection, мы его видим когда
выводим у dom элемента свойство children,
она живая и всегда отображает актуальное
состояние dom дерева. наглядная демонстрация [112608]

мы не можем использовать htmlCollection как массив,
и не можем перебрать через forEach, но мы можем
переобразовать его в массив через Array.from()

у HTMLCollection есть некоторые особенности
массива, например, можно обратиться по индексу
*/
// 112608
// сохраняем ссылку на коллекцию дочерних элементов
const bodyChildren = document.body.children

// выводим коллекцию
console.log(bodyChildren)

// создание нового элемента button
const newButtonElement = document.createElement('button')

// добавление нового элемента button
document.body.appendChild(newButtonElement)

// выводим коллекцию
console.log(bodyChildren)

// коллекция как массив
const bodyChildrenArray = [...bodyChildren]

bodyChildrenArray.forEach(element => {
	console.log('child element of body:', element)
})

// будем работать теперь с divElement
const divElement = document.body.children[0]

// первый дочерний элемент внутри div
console.log('first child element in div:', divElement.firstElementChild)

// последний дочерний элемент внутри div
console.log('last child element in div:', divElement.lastElementChild)

// есть несколько способов работать с нодами
console.log(
	'parent node div:',
	// по поведению он такой же, как и parentElement
	divElement.parentNode,
)

// разница будет при работе с html корнем
console.log(
	'parentElement:',
	// родительского элемента у html нет, null
	document.documentElement.parentElement,
)

console.log(
	'parentNode:',
	// ссылается на объект document, ссылка есть
	document.documentElement.parentNode,
)

// разница между previousElementSibling и previousSibling
console.log(
	// ссылается на соседний элемент перед div, null
	divElement.previousElementSibling,
)

console.log(
	// ссылается на узлы, #text
	divElement.previousSibling,
)

// ситуация аналогичная
console.log(
	// ссылается на соседний элемент после div, null
	divElement.nextElementSibling,
)

console.log(
	// ссылается на узлы, #text
	divElement.nextSibling,
)

// отличие от first last element child и first last child
console.log(
    // первый дочерний узел внутри div
    divElement.firstElementChild
)

console.log(
    // первый дочерний узел внутри div
    divElement.firstChild
)

console.log(
    // последний дочерний элемент внутри div
    divElement.lastElementChild
)

console.log(
    // последний дочерний узел внутри div
    divElement.lastChild
)

// children и childNodes
console.log(
    // дочерние элементы внутри div
    divElement.children
    // просто возвращает коллекцию элементов
)

console.log(
    // дочерние узлы внутри div
    divElement.childNodes
    // возвращает node list, список узлов с элементами
)