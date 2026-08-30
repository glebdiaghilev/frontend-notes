// указываем что сущность дополнительно экспортируется
export const tabsSelectors = {
	//...
}

const tabsData = {}

// создаем selectors который у всех
const selectors = {}

const number_1 = 1
const number_2 = 2

// экспортируем функцию в module.js
export default function initTabs() {
	console.log('initTabs!')
	//...
}
// указываем с default, что функция главная

// так же можно в конце файла нужное экспортировать
export {number_1, number_2, tabsData}

// мы можем указывать новые имена при экспорте
export {selectors as selectorTab}