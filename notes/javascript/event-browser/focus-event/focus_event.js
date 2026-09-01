/*
focus событие возникает, когда интерактивный элемент
получает состояние фокуса. 
tab - вперед, leftShift + tab - назад. 

blur - это событие потери фокуса. 
оно возникает во время потери состояния фокуса.

событие change и blur очень похожи между собой, они
оба - события потери фокуса, но есть нюанс.
если в момент взятия элемента в фокус и в момент потери
элементом фокуса введенное значение будет одинаковым,
то на примере не сработает класс is-invalid, событие
change не возникло, так как в момент получения и в момент
потери фокуса значение поле ввода был идентичным, а теперь
меняем change на blur, и все срабатывает! 
*/
const loginInputElement = document.querySelector('#login')
const passwordInputElement = document.querySelector('#password')
const submitButtonElement = document.querySelector('.button-submit')

// событие focus
loginInputElement.addEventListener('focus', () => {
    console.log('on focus: input login')
})

passwordInputElement.addEventListener('focus', () => {
    console.log('on focus: input password')
})

submitButtonElement.addEventListener('focus', () => {
    console.log('on focus: submit button')
})

// событие blur
loginInputElement.addEventListener('blur', () => {
	console.log('focus left from input login')
})

passwordInputElement.addEventListener('blur', () => {
	console.log('focus left from input password')
})

submitButtonElement.addEventListener('blur', () => {
	console.log('focus left from submit button')
})

// событие change и blur, пример ошибки с change и без ошибки с blur
loginInputElement.addEventListener('blur', () => {
    const isLoginEmpty = loginInputElement.value.length === 0

    loginInputElement.classList.toggle('is-invalid', isLoginEmpty)
})

// убираем неприятную красную рамку
loginInputElement.addEventListener('focus', () => {
    loginInputElement.classList.remove('is-invalid')
})

/*
можно самостоятельно принудительно взять определенный
элемент в фокус или убрать с него фокус.

для этого есть специальные методы focus() и blur()

на самом деле это не самая лучшая затея, лучше у html
атрибута задавать autofocus, но имейте ввиду, что
поймать такой фокус не получится, и в консоли ничего не будет.
*/
loginInputElement.focus()

setTimeout(() => {
    loginInputElement.blur()
}, 2000)

/*
в примерах я не делал события focus/blur для document, а
лишь привязывал к конкретным элементам, все потому, что
события focus/blur не всплывают от целевого элемента по всему
dom дереву. поэтому мы не можем перехватить событие на каком-либо
из родительских элементов. 
иногда нам надо, чтобы события фокуса всплывали
*/
// focus -> focusin
document.addEventListener('focusin', (event) => {
    // проверяем на нужный элемент
    if (event.target.matches('#login')) {
        console.log('focusin event:', event)
    }
})

// blur -> focusout
document.addEventListener('focusout', event => {
    // проверяем на нужный элемент
	if (event.target.matches('#login')) {
        console.log('focusout event:', event)
    }
})

/*
фокус работает только на интерактивных элементах.
и часто бывает, что кнопка это div, а не button, и нужно
div сделать возможным для фокуса. просто добавим tabindex="1",
и все сработает, можно ставить абсолютно любое число, но 
если добавить туда число меньше нуля, то фокус не сработает,
если ставить туда число больше нуля, То фокус сработает, и число
будет порядковым номером в списке навигации среди всех остальных
интерактивных элементов. а если число будет просто 0, то браузер
сам определит в каком порядке будет элемент и фокус сработает. 
*/
const firstButtonElement = document.querySelector('#button-1')
const secondButtonElement = document.querySelector('#button-2')
const thirdButtonElement = document.querySelector('#button-3')

firstButtonElement.addEventListener(() => {
    console.log('on focus: button 1')
})

secondButtonElement.addEventListener(() => {
	console.log('on focus: button 2')
})

thirdButtonElement.addEventListener(() => {
	console.log('on focus: button 3')
})

/*
полезный трюк, фишка для accessability,
можно узнать текущий фокусируемый элемент,
когда мы пишем сайт, мы проверяем, чтобы он полностью работал
с клавиатуры, и узнать текущий фокусируемый элемент на данном
этапе разработки очень важно. 

в разметке мы между логином и паролем ставит модальное окно,
которое скрывается через css. в итоге после логина фокус 
"пропадает" и логично что должен следующим быть пароль.
не всегда разметка бывает очевидной, чтобы исправить эту ошибку.

я использую фишку devtools, а именно live expression, нажимаем
на глазик в console, появится поле ввода куда можно ввести
любую команду, мы вводим туда:
document.activeElement
это выражение указывает на dom элемент в состоянии фокуса.
devtools укажет на элемент в фокусе, и нажав на него, браузер
любезно укажет на элемент в разметке. 
*/

