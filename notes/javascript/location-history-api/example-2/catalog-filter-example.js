const filterFormElement = document.querySelector('.filter')

filterFormElement.addEventListener('submit', (event) => {
    event.preventDefault()
})

filterFormElement.addEventListener('change', () => {
    const formData = new FormData(filterFormElement)
    const formDataObj = Object.fromEntries(formData)
    // заменим этот код на другой
    // const paramsString = Object.entries(formDataObj)
    //     .map(([key, value]) => `${key}=${value}`)
    //     .join('&')
    const params = new URLSearchParams(formDataObj)
    const paramsString = params.toString()

    window.history.replaceState(
        {},
        '',
        `${window.location.pathname}?${paramsString}`
    )
})

// это то же убираем применив класс
// window.location.search
//     .replace('?', '')
//     .split('&')
//     .forEach((queryParam) => {
//         const [name, value] = queryParam.split('=')

//         filterFormElement[name].value = value
//     })
const paramsFromUrl = new URLSearchParams(window.location.search)

paramsFromUrl.forEach((value, name) => {
    filterFormElement[name].value = value
})

/*
для работы со структурой данных, которая возвращает 
URLSearchParams есть еще несколько методов их действия
похожи на действия методов структуры данных map или 
же структуры данных получаемых с formData.
подробнее о этом можно почитать на mdn.
*/