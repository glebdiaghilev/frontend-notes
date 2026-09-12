// location api 
/*
в глобальном window есть свойство location, которое содержит
информацию о текущем url-адресе страницы и предоставляет методы
для управления им. 

выведем в консоль window.location, там будет множество свойств,
например, 
href - полный url-адрес текущей страницы.
origin - это строка содержащая протокол и имя хоста.
pathname - это текущий путь, то есть буквально часть url-адреса
после хоста.
protocol - протокол.
host - хост; hostname - имя хоста.
search - хранит get параметры из url-адреса.
если мы нажмем на якорную ссылку на сайте, она добавится в 
url-адрес. и hash свойство будет ее хранить.

из чего состоит url-адрес?
https://example.com:3000/profile/edit?key=1&key=2#user-info
разберем по кускам этот url-адрес
https:// - protocol/протокол
example.com - host name/имя хоста
:3000 - port/порт
example.com:3000 - host/хост
https://example.com:3000 - origin
/profile/edit - path name/имя пути
?key=1&key=2 - get-parameters/get-параметры
#user-info - hash
*/
console.log(window.location)

setTimeout(() => {
    // это единственный способ перезагрузки страницы через js
    // window.location.reload()

    // оба метода инициируют переход на новую страницу
    // метод assign
    /* 
    его работа:
    через 3 секунды инициирует переход на страницу catalog.html,
    если мы нажмем на кнопку на браузере (<-), то вернемся 
    к main-page.html. этот метод переводит на другую страницу
    */
    // window.location.assign('./catalog.html')
    
    // метод replace
    /*
    его работа:
    через 3 секунды инициирует переход на страницу about-us-page.html,
    если мы нажмем на кнопку на браузере (<-), то мы не вернемся на 
    main-page.html, мы перейдем на поиск в браузере. этот метод подменяет
    страницу
    */
    // window.location.replace('./about-us-page.html')

    // переход на другую страницу, href как сеттер
    /*
    нажмем кнопку назад, снова странное поведение.
    браузер распознал эту инструкцию, как автоматический редирект,
    и поэтому инструкция сработала, как location.replace.
    если же установка нового значения window.location.href будет выполнятся
    в ответ на какое-то действие пользователя, то поведение с кнопкой назад
    будет иным.
    */
    // window.location.href = '.catalog.html'
}, 3000)

// особенность: он отработал как window.location.assign()
document.addEventListener('click', (event) => {
    if (event.target.href) {
        event.preventDefault()
        window.location.href = event.target.href
    }
})

// history api 
/*
в глобальном window есть сущность history, выведем ее в консоль.
там есть свойство length - оно показывает длину текущей сессии
*/
console.log(window.history)

// методы history api
const backButtonElement = document.getElementById('back-button')
const forwardButtonELement = document.getElementById('forward-button')
const backButtonElement2 = document.getElementById('back-button-2')
const forwardButtonELement2 = document.getElementById('forward-button-2')

//back() и forward()
// переход назад по истории сессии браузера
backButtonElement.addEventListener('click', () => {
    window.history.back()
})

// переход вперед по истории сессии браузера 
forwardButtonELement.addEventListener('click', () => {
    window.history.forward()
})

// go(...)
// переход назад по истории сессии браузера на два шага
backButtonElement2.addEventListener('click', () => {
    window.history.go(-2)
})

// переход вперед по истории сессии браузера на три шага
forwardButtonELement2.addEventListener('click', () => {
    window.history.go(3)
})

// pushState replaceState
const addToHistoryButtonElement = document.getElementById('add-to-history')
const showHistoryButtonElement = document.getElementById('show-history')

// для создания новой записи в истории текущей сессии
/*
pushState: у него три параметра, просто создает сессию.
он меняет url-адрес на нужный, который указан в третьем 
аргументе. добавляем новую сессию в конец сессий при срабатывании 
события.
если нам нужно немного другое и не надо каждый раз добавлять 
сессию, то есть replaceState. все то же самое, но он не добавляет
новую сессию в history. он модифицирует последнюю запись в истории 
сессий, а не добавляет новую, в отличие от pushState.
*/
addToHistoryButtonElement.addEventListener('click', () => {
    window.history.replaceState(
        {
            example: 'some text',
        },
        '',
        './catalog.html',
    )
})

showHistoryButtonElement.addEventListener('click', () => {
    console.log('history:', window.history)
})
