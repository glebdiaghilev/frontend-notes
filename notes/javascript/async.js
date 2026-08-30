/* 
синхронный код js и его работа:
читает и выполняет код специальная программа, 
называемая js движком, в большинстве 
случаев это движок v8. выполнение js 
кода всегда выполняется в одном потоке,
иначе говоря в конкретный момент времени 
движок может выполнить не более одной строки кода,
при том следующая строка кода не будет выполняться
пока не выполнится предыдущая. 
этот принцип называется синхронным.
*/
// это синхронный код:
console.log(1)
console.log(2)
console.log(3)

// это синхронная функция, пока она выполняется другие нет.
// эта функция блокирует выполнение кода, и она может быть важной
const waitConsoleLog = (ms, callback) => {
	const now = new Date().getTime()

	while (new Date().getTime() < now + ms) {
		// ничего не делаем
	}

	callback()
}

console.log(1)
waitConsoleLog(5000, () => console.log(2))
console.log(3)

// это асинхронная функция, не блокирует выполнение кода
const waitAsync = (ms, callback) => {
	setTimeout(callback, ms)
}

console.log(1)
waitAsync(5000, () => console.log(2))
console.log(3)

/*
за последовательность выполнения кода, 
в частности за своевременное выполнение 
асинхронных задач в js отвечает 
событийный цикл (event loop).

работа event loop:
js работает в одном потоке, он может 
выполнить только одну операцию за раз.
такой поток называют основным потоком выполнения.
если в коде есть задачи, выполнение 
которых занимает некоторое время, то такие
задачи считаются асинхронными, событийный цикл
создает очередь в которую добавляются
все асинхронные задачи. очередь задач - это
список задач, которые движку js необходимо
выполнить как только основной поток выполнения
будет освобожден. главная задача событийного 
цикла - постоянно проверять, есть ли в
очереди задачи и свободен ли поток выполнения,
если основной поток свободен, событийный цикл
берет первую задачу из очереди и выполняет ее.  
*/
// концепция event loop:
// синхронный код, выполняется сразу
console.log('start program')

// асинхронная операция с setTimeout
setTimeout(() => {
	console.log('async task completed')
}, 2000) // задержка 2 секунды

// синхронный код, выполняется сразу
console.log('start program')

// callback функция подробно
/*
callback - это функция, которая вызывается 
в ответ на совершение определенного события.
*/
setTimeout(() => {
	console.log('hello!')
}, 5000)

// рассмотрим на примере callback hell:
/*
задача:
у нас есть маркетплейс, и нам нужно на фронтенде
у продавца получить имя автора отзыва его первого 
товара. мы должны получить id продавца, его первый продукт,
и его первый отзыв а потом имя автора отзыва. 
*/
const makeRequest = (url, onSuccess) => {
	// ...
}

const sellerId = 154

// callback hell. это сложно читать
makeRequest(`/api/sellers/${sellerId}`, seller => {
	const firstProductId = seller.productIds[0]

	makeRequest(`/api/products/${firstProductId}`, product => {
		const firstReviewId = product.reviewsIds[0]

		makeRequest(`/api/reviews/${firstReviewId}`, review => {
			const authorName = review.author.name
		})
	})
})

// для этого есть промисы
/*
promise - специальный объект-надстройка
для работы с асинхронным кодом.

асинхронные функции возвращают 
объект промис в качестве результата.

promise имеет 3 состояния:
pending - ожидание, исходное состояние 
fulfilled - выполнено успешно, получаем результат
rejected - выполнено с ошибкой

promise может изменить состояние ровно один раз,
из исходного pending в fulfilled или rejected

основные методы promise:
then() - обрабатывает fulfilled состояние
catch() - обрабатывает rejected состояние 
*/

// создание промиса самостоятельно
/*
promise - это класс, в конструктор 
которого нужно передать 
функцию-исполнитель асинхронной операции.

главная задача функции - это выполнить
асинхронную задачу и перевести состояние promise 
в состояние fulfilled или rejected.
*/
const promise = new Promise((fulfill, reject) => {
	console.log('start, pending...')

	setTimeout(() => {
		if (Math.random() > 0.5) {
			fulfill('yes! fulfilled!')
		} else {
			reject('ahh! rejected!')
		}
	}, 3000)
})

// используем наши методы
promise
	// обработаем fulfilled
	.then(
		// можно обойтись без catch и написать обработку rejected в then
		successData => {
			console.log('successful success', successData)
		},
		errorData => {
			console.log('99 percent of people:', errorData)
		},
	)
	// обработаем rejected
	.catch(errorData => {
		console.log('99 percent of people:', errorData)
	})
	// гарантировано напишем что-нибудь в конце
	.finally(() => {
		console.log('final code version')
	})

// теперь решим проблему с callback hell
const makeRequestPromise = (url, onSuccess) => {
    return new Promise((fulfill) => {
        fulfill('successful success')
    })
}

const sellerId = 154

makeRequestPromise(`/api/sellers/${sellerId}`)
    .then((seller) => {
        const firstProductId = seller.productIds[0]

        return makeRequestPromise(`/api/products/${firstProductId}`)
    })
    .then((product) => {
        const firstReviewId = product.reviewsIds[0]

        return makeRequestPromise(`/api/reviews/${firstReviewId}`)
    })
    .then((review) => {
        const authorName = review.author.name
    })
    .catch((error) => {
        console.log(error)
    })

/*
для работы с асинхронными 
функциями - async и await.

async указывают перед функцией, 
которая должна вернуть промис.

await - заставить js код 
дождаться выполнения промиса, 
а потом продолжить работу.

у await есть ограничения на 
использование на верхнем 
уровне вложенности кода

есть два способа решить это, 
чтобы не вылетела ошибка:
1. грязный, но правильный - добавить 
над всем кодом оберточную функцию;
2. простой - превратить подключаемый к js 
странице скрипт в модульный 
(просто приписать type="module")

*/
// синтаксис async
async function asyncFunction() {}
const getSomething = async () => {}

// мы указываем async, любой return обернется в промис
async function getSomething() {
    return 'hello!'
}
// мы можем работать с этой функцией как с промисом
getSomething()
    .then((something) => {
        console.log(something)
    })

// ключевое слово await 
async function getSomethingAwait() {
    // для начала явно вернем промис
	return new Promise((fulfill) => {
        setTimeout(() => {
            fulfill('hello!')
        }, 3000)
    })
}

// с помощью await не используем then
const something = await getSomethingAwait()

// чтобы все вывелось и не было pending есть await
console.log(something)

// перепишем снова нашу задачу на async await
const makeRequestAsync = async (url, onSuccess) => {
	return new Promise(fulfill => {
		fulfill('successful success')
	})
}

try {
    // выполняем нашу цепочку await
    const sellerId = 154

    const seller = await makeRequestAsync(`/api/sellers/${sellerId}`)
    const firstProductId = seller.productIds[0]

    const product = await makeRequestAsync(`/api/products/${firstProductId}`)
    const firstReviewId = product.reviewsIds[0]

    const review = await makeRequestAsync(`/api/reviews/${firstReviewId}`)
    const authorName = review.author.name
} catch (error) {
    // отлавливаем ошибку только так
    console.log(error)
}