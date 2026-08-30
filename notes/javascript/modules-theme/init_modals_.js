// пишем конструкцию, чтобы получить 
import { selectorTab } from './init_tabs_'

// можно перечислить несколько
import { tabsSelectors, tabsData } from './init_tabs_'

// мы можем переименовывать прямо в импорте
import { selectors as selectorSlider } from './init_sliders_'

const modalsSelectors = {
	//...
}

// создаем selectors который у всех
const selectors = {}

// экспортируем функцию в module.js
export default function initSModals() {
	console.log('initModals!')
	//...
}
// указываем с default, что функция главная

// меняем tabsSelectors:
tabsSelectors['bla'] = 123

selectorSlider['alb'] = 321

export { selectors }