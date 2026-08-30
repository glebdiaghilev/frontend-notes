const slidersSelectors = {
	//...
}

// создаем selectors который у всех
const selectors = {}

// экспортируем функцию в module.js
export function initSliders() {
	console.log('initSliders!')
	//...
}
// указываем с default, что функция главная (нет, для примера [1])

// [1] стрелочная функция с default
const slider_init = () => {
	console.log('slider_init!')
}

export default slider_init

// экспортируем selectors
export { selectors }