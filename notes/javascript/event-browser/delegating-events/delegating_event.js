// делегирование событий
// как делать не стоит:
// чтобы использовать код, уберите комментарии
// const todoItemElements = document.querySelectorAll('.todo__item')

// todoItemElements.forEach((todoItemElement) => {
//     todoItemElement.addEventListener('click', () => {
//         todoItemElement.classList.add('is-completed')
//     })
// })

/*
задача выполнена, но очень плохо:
1. в dom дереве много todo__item, и теперь
каждый этот элемент имеет свой обработчик 
клика, а если элементов 1000, То браузер
хранил бы информацию о тысяче обработчиков.
2. все элементы todo__item присутствуют изначально,
так как их разметка указана в файле, в современном 
frontend манипуляции dom делают через js,
может быть такая ситуация:
вы навесили таким образом обработчики события клика
на элементы todo__item, которые существуют в dom 
дереве на момент срабатывания этого кода, но затем
вы дорисовали через js новый todo__item элементы.
мы создадим три элемента и увидим, что на них обработчики
не работают. дело в том, что на момент навешивания
обработчиков событий этих трех последних элементов
не было в dom дереве 
*/
// создадим функцию
const onTodoItemClick = todoItemElement => {
	todoItemElement.classList.add('is-completed')
}

// решение проблемы: делегирование событий
document.addEventListener('click', event => {
	// проверка, что клик произошел именно по todo__item
	if (event.target.classList.contains('todo__item')) {
		onTodoItemClick(event.target)
	}
	/*
    мы не вешали обработчики кликов на 
    конкретные элементы, у нас есть буквально
    один обработчик по всему document.
    */
})

// эти элементы не имеют обработчиков, но есть решение
const addTodoItem = () => {
	const todoListElement = document.querySelector('.todo__list')
	const newTodoItemMarkUp = `<li class="todo__item">Todo item...</li>`

	todoListElement.insertAdjacentHTML('beforeend', newTodoItemMarkUp)
}

addTodoItem()
addTodoItem()
addTodoItem()

// усложним задачу: добавим тег span
// 1: onTodoItemClick

// 2: делегирование событий
/*
мы сломали код, теперь todo__item2 элементы не загораются
в функции обработчика событий мы проверили цель клика
event.target, что у нее есть класс todo__item2, в 
event.target хранится ссылка на целевой, самый
глубокий элемент dom дерева с которого начинает всплывать
событие. если попадать на li то сработает, если на span то
ничего не сработает. решение: closest
*/
document.addEventListener('click', event => {
    const todoItemElement = event.target.closest('.todo__item2')

	if (todoItemElement) {
		onTodoItemClick(todoItemElement)
	}
})

// добавление элементов
const addTodoItem2 = () => {
	const todoListElement = document.querySelector('.todo__list2')
	const newTodoItemMarkUp = `<li class="todo__item2"><span>Todo item...</span></li>`

	todoListElement.insertAdjacentHTML('beforeend', newTodoItemMarkUp)
}

addTodoItem2()
addTodoItem2()
addTodoItem2()

// поведение браузера по умолчанию 
/*
сценариев у браузера не так много, 
но их нужно контролировать

при отправке форм в современном frontend 
буквально всегда меняют действие браузера 
по умолчанию, которое возникает при клике на
submit кнопку, это делают как минимум для кастомной
валидации введенных пользователями значений
перед отправкой формы. 
*/
const linkElement = document.querySelector('a')
const formElement = document.querySelector('form')


// отмена действия браузера по умолчанию
linkElement.addEventListener('click', (event) => {
    // отмена действия браузера по умолчанию
    event.preventDefault()
})

formElement.addEventListener('submit', (event) => {
    // отмена действия браузера по умолчанию
    event.preventDefault()
})

// генерация кастомных событий 
/*
проблема:
если мы просто вызовем функцию,
то у нас не сработает анимация текста
section, это можно исправить предугадав,
когда закончилась анимация preloader.
*/
const sectionElements = document.querySelectorAll('section')

const animateSections = () => {
    sectionElements.forEach((sectionElement) => {
        sectionElement.classList.add('is-visible')
    })
}

document.addEventListener('preloaderClose', (event) => {
    // посмотрим что в event в кастомном событии
    console.log(event)
    animateSections()
})

// решение проблемы
const preloaderElement = document.querySelector('.preloader')

preloaderElement.addEventListener('animationend', (event) => {
    if (event.animationName === 'fade-out') {
        preloaderElement.dispatchEvent(
			/*
            а что если мы в момент генерации события 
            хотим добавлять какую-то собственную информацию,
            чтобы затем ее можно было получить, для этого
            нужен не Event, а CustomEvent
            */
			new CustomEvent('preloaderClose', {
                bubbles: true,

                // в это свойство можно указать данные
                detail: {
                    closeAnimationName: event.animationName,
                    closeAnimationDuration: event.elapsedTime,
                },
            }),
		)
    }
})
/*
этот подход самый правильный, ведь если разбить
его по модулям, то все сработает корректно. 
js код относящийся к preloader ничего не знает
о других модулях, и в частности не запускает
какие-другие сторонние функции, он лишь может
уведомить все остальное приложение о том, что
событие preloaderClose случилось. 
*/