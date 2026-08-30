/*
когда пользователи взаимодействует со 
страницей сайта, браузер можем обрабатывать
огромное количество возникающих событий:
click, scroll, keydown / keyup, 
mouseover / mouseout и т.д.

видов событий в браузере существует больше
сотни, запоминать их все не нужно 

каждое событие исходит от конкретного dom 
элемента или от самого окна браузера.


*/
const logAllEvents = () => {
    console.log(
		Object
            .keys(window)
			.filter(key => /^on/.test(key))
			.map(eventName => eventName.slice(2)),
	)
}

logAllEvents()

/*
в html разметке у нужного dom элемента
вызываем событие с любым названием и в
ней пишем код или вызов функции:
onclick="console.log('click!')"
или 
onclick="logMessage()",
писать обработчики событий в html коде
не самый лучший способ, лучше вызывать
функцию.
*/
const logMessageOnClick = () => {
    console.log('click!')
}

/*
второй способ: через свойство 
события у dom элемента
*/
const buttonElement = document.querySelector('.click-button-please')

const anotherClickMessage = () => {
    console.log('hot click!')
}

// пишем только маленькими буквами
buttonElement.onclick = anotherClickMessage

/*
у этих двух обработчиков событий есть
один недостаток - мы не можем повесить 
на один элемент несколько обработчиков 
события, но есть решение
*/

// обработчик события через addEventListener
const bestButtonElement = document.querySelector('.best-button-click')

// первый обработчик
bestButtonElement.addEventListener('click', () => {
    console.log(1)
})

// второй обработчик 
bestButtonElement.addEventListener('click', () => {
	console.log(2)
})

// удаление события 
const firstButtonElement = document.querySelector('.button-1')

const logMessageButtonClick = () => {
	console.log('click!')
}

firstButtonElement.addEventListener('click', logMessageButtonClick)

const secondButtonElement = document.querySelector('.button-2')

secondButtonElement.addEventListener('click', () => {
    // чтобы удалять обработчики необходимо функции писать
    firstButtonElement.removeEventListener('click', logMessageButtonClick)
})

// объект события event 
const objButtonElement = document.querySelector('.button-object')

// объект event пишется в аргументах функции
objButtonElement.addEventListener('click', (event) => {
    // будет информация о клике 
    console.log(event)
    /*
    свойство target есть в объекте event большинства 
    событий и используется оно разработчиками очень часто,
    в target содержится ссылка на dom элемент на котором
    возникло событие.
    */
})

/*
всплытие, в разметке у нас три вложенных элемента:
box-1, box-2, box-3, для трех элементов добавлен
обработчик события клика, который выводит сообщение
в консоль, что произойдет, если пользователь кликнет
на элемент box-3? сработал код всех обработчиков событий
box-3 -> box-2 -> box-1, браузерные события работают по принципу.
в момент возникновения определенного события на элементе
сначала срабатывают все обработчики на этом элементе, а
затем событие "всплывает" наверх по dom дереву переходя по
цепочке от исходного элемента к родительскому, и так до тех
пор, пока события не всплывут на самый верх до document.  
весь этот процесс называется всплытием событий (bubbling)

самый глубокий элемент с которого события начинают
всплывать называется целевым элементом
*/
// всплытие и погружение событий 
const firstBoxElement = document.querySelector('.box-1')
const secondBoxElement = document.querySelector('.box-2')
const thirdBoxElement = document.querySelector('.box-3')

// функция для визуального восприятия
const highLight = element => {
	const color = 'rgba(255, 255, 255, 0.6)'
	const shadow = [
		`0 4px 16px ${color}`,
		`0 20px 40px ${color}`,
		`0 50px 80px ${color}`,
		`0 80px 140px ${color}`,
	].join(', ')

	element.style.transition = 'box-shadow 0.2s ease'

	let delay = 0
	if (element.classList.contains('box-2')) delay = 1200
	if (element.classList.contains('box-1')) delay = 2400

	setTimeout(() => {
		element.style.boxShadow = shadow

		setTimeout(() => {
			element.style.boxShadow = 'none'
		}, 1200)
	}, delay)
}

firstBoxElement.addEventListener('click', (event) => {
    console.log('click on box-1', event.target, event.currentTarget)
    highLight(firstBoxElement)

    /*
    event.target - выведет box-3
    event.currentTarget - выведет box-1
    */
})

secondBoxElement.addEventListener('click', (event) => {
	console.log('click on box-2', event.target, event.currentTarget)
	highLight(secondBoxElement)

	/*
    event.target - выведет box-3
    event.currentTarget - выведет box-2
    */

	/*
    фаза погружения, первая стадия, события погружаются 
    по dom дереву вниз, вторая стадия, событие достигло
    целевого элемента, третья стадия, событие всплывает
    по dom дереву снизу вверх. когда мы привязываем 
    обработчики событий dom элементу, по умолчанию мы не 
    работаем с первой фазой жизненного цикла - фазой погружения.
    такие обработчики буквально не знают про погружение, они
    обрабатывают события уже на второй и третьей фазе, можно
    поймать события на стадии погружения.
    
    теперь событие обрабатывается на этапе погружения,
    для надобности можно убрать аргумент, если что вот копировать:
    { capture: true } или true
    */
}, { capture: true })

thirdBoxElement.addEventListener('click', (event) => {
	console.log('click on box-3', event.target, event.currentTarget)
	highLight(thirdBoxElement)

	/*
    event.target - выведет box-3
    event.currentTarget - выведет box-3
    */

	/* 
    иногда нам может потребоваться перехватить 
    события на определенном этапе и отменить его
    дальнейшее всплытие
    */
    // остановка всплытия, мягкая остановка только его
    // event.stopPropagation()

    // жесткая остановка всплытия, остановка других обработчиков
    event.stopImmediatePropagation()
})  
/*
currentTarget - это dom элемент на который
фактически прицепили обработчик события

ссылку на dom элемент на который добавили 
обработчик события можно получить и другим образом,
с помощью ключевого слова this
*/
firstBoxElement.addEventListener('click', function() {
    console.log('click on box-1', this)
	highLight(firstBoxElement)
})

// напишем два обработчика сверху
thirdBoxElement.addEventListener('click', () => {
    console.log('click better!')
})

thirdBoxElement.addEventListener('click', () => {
    console.log('best click!')
})
// обработчики сработают при stopPropagation()
// обработчики не сработают при stopImmediate()