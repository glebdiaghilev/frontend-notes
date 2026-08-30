// получение размера dom элемента,
// нам понадобятся метрики для реализаций ui компонентов
const boxElement = document.querySelector('.box')

// свойства размеров
console.log('full width:', boxElement.offsetWidth)
console.log('full height:', boxElement.offsetHeight)
// хранятся только числа, подразумевают пиксели

/*
мы указывали width height, и свойства padding и border.
браузер при отрисовке элементов складывает все эти параметры.
в devtools можно увидеть из чего складываются значения высоты
и ширины. если бы в css коде на элемент действовало бы свойство
box-sizing: border-box;, то в js коде свойства offsetWidth
и offsetHeight показывали бы значения 100, т.к. браузер 
поменял формулу расчета итоговых размеров элемента, и 
padding и border включены в размеры элемента.
*/

// ширина левой и верхней рамки border
console.log('left border width:', boxElement.clientLeft)
console.log('top border width:', boxElement.clientTop)

/*
ширины рамки справа и снизу не существует.

как можно описать рамку border в контексте блочной
модели элемента? она отделяет внешнюю границу элемента
от внутренностей где начинается padding, свойства
clientLeft и clientTop скорее не про border, а про 
это самое расстояние от внешней границы элемента до его
внутренней части. 
*/

// учимся понимать необходимость
console.log(
	/*
    теперь расстояние 45, ведь
    скроллбар прибавляет 15 пикселей.

    clientLeft это расстояние от левой 
    границы рамки до внутренностей
    */
	'the distance from the left border of the element to its interior:',
	boxElement.clientLeft,
)

console.log(
	/*
    clientTop это расстояние от верхней
    границы рамки до внутренностей
    */
	'the distance from the top boundary of the element to the interior:',
	boxElement.clientTop,
)

// размеры элемента без border scrollBar
const secondBoxElement = document.querySelector('.box-2')

console.log('clean width:', secondBoxElement.clientWidth)

console.log('clean height:', secondBoxElement.clientHeight)

// размеры элемента без рамки, но с учетом прокручиваемой области
console.log(
    'clean width but with scrollbar:', 
    secondBoxElement.scrollWidth
)

console.log(
    'clean height but with scrollbar:',
    secondBoxElement.scrollHeight
)

// вызов программного скролла 
secondBoxElement.scroll({
    top: 10,
    left: 50,
    behavior: "smooth",
})

secondBoxElement.scroll(10, 50)

// ширина и высота невидимой, 
// уже прокрученной по вертикали или горизонтали область
console.log(
	'the width of the invisible area that has already been scrolled horizontally:',
    secondBoxElement.scrollTop
)

console.log(
	'the width of the invisible area that has already been scrolled vertically:',
	secondBoxElement.scrollLeft,
)

// мы можем установить значения координат прокручиваемой области
secondBoxElement.scrollLeft = 10
secondBoxElement.scrollTop = 50

// проблемы getComputedStyle()
console.log(getComputedStyle(secondBoxElement).height)

/*
мы не всегда получаем те значения, 
которые нам действительно нужны. 
зачастую нам недостаточно той самой
ширины и высоты элемента, которую браузер
считывает и предоставляет нам в getComputedStyle()
нам банально нужны более гибкие метрики, чтобы лучше
контролировать логику кода.

на то, что выдаст getComputedStyle() влияет наличие
действующих на элемент css свойств, например, стоит нам
убрать height и сделать div -> span, то нам прилетит auto
вместо значения. при получении width в getComputedStyle
мы получили бы разные значения ширины.

когда требуются метрики размеров элемента или прокручиваемой
области, предпочтительнее использовать конкретное свойство
dom элемента.
*/

/*
координаты dom элемента.
для того, чтобы в js позиционировать dom элемент,
нужно сначала понимать, какие бывают системы координат
в браузере. их всего две: относительно окна браузера и 
относительно всей страницы
*/

// получение актуальных координат dom элемента
// относительно окна браузера:
const thirdBoxElement = document.querySelector('.box-3')
const thirdBoxElementRectParams = thirdBoxElement.getBoundingClientRect()

console.log(thirdBoxElementRectParams)

// левый верхний угол
console.log(
	'The coordinates of the top‑left corner of the element relative to the window:',
    thirdBoxElementRectParams.x,
    thirdBoxElementRectParams.y
)

// правый верхний угол
console.log(
	'The coordinates of the top‑right corner of the element relative to the window:',
    thirdBoxElementRectParams.right,
    thirdBoxElementRectParams.top
)

// правый нижний угол
console.log(
	'The coordinates of the bottom‑right corner of the element relative to the window:',
    thirdBoxElementRectParams.right,
    thirdBoxElementRectParams.bottom
)

// левый нижний угол
console.log(
	'The coordinates of the bottom‑left corner of the element relative to the window:',
	thirdBoxElementRectParams.left,
	thirdBoxElementRectParams.bottom,
)

// получить координаты текущей позиции скролла страницы
console.log(
    'coordinates of scroll:',
    window.scrollX,
    window.scrollY
)

// преобразовать координаты углов элемента относительно окна
// браузера в координаты относительно всей страницы целиком
// левый верхний угол
console.log(
	'The coordinates of the top‑left corner of the element relative to the window:',
    thirdBoxElementRectParams.x + window.scrollX,
    thirdBoxElementRectParams.y + window.scrollY
)

// правый верхний угол
console.log(
	'The coordinates of the top‑right corner of the element relative to the window:',
    thirdBoxElementRectParams.right + window.scrollX,
    thirdBoxElementRectParams.top + window.scrollY
)

// правый нижний угол
console.log(
	'The coordinates of the bottom‑right corner of the element relative to the window:',
    thirdBoxElementRectParams.right + window.scrollX,
    thirdBoxElementRectParams.bottom + window.scrollY
)

// левый нижний угол
console.log(
	'The coordinates of the bottom‑left corner of the element relative to the window:',
	thirdBoxElementRectParams.left + window.scrollX,
	thirdBoxElementRectParams.bottom + window.scrollY,
)