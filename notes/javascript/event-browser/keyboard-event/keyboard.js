// нажатие клавиш и их event свойства
/*
keydown - нажатие на клавишу
keyup - отпускание клавиши 

эти события не совсем правильно использовать 
для отслеживания ввода ввода каких-либо данных
в поля input или textarea, для этих целей есть
другие отдельные события. события клавиатуры 
нужны для обработки hotkeys.
*/
/*
я нажимаю и отпускаю кнопку, срабатывает
keydown -> keyup, если я просто зажму кнопку, то 
бесконечно будут генерироваться события keydown

интересное свойство key в event, если я нажму
q на английской раскладке то там будет "q",
если на кириллице, то будет "й". 
так же есть свойство code, здесь будет 
подкапотный код нажатой клавиши KeyQ, в отличие 
от key его значение не зависит от текущей раскладки 
клавиатуры, при идентификации нажатой клавиши
не стоит ориентироваться на свойство key,
лучше отдать предпочтение свойству code. 

есть свойство KeyCode - это числовой код нажатой
клавиши, согласно таблице ascii символов.

как мы знаем, комбинации клавиш обычно состоят из
нескольких нажатий, поэтому есть свойства: altKey, ctrlKey,
shiftKey и metaKey - они содержат булевое значение, и 
отвечают за факт одновременного нажатия на соответствующую
специальную клавишу клавиатуры. таким образом на уровне
js кода можно отловить hotkey пользователя. 

metaKey - это свойство предназначено для проверки
нажатия на клавишу command на устройствах OC macOS.
*/
document.addEventListener('keydown', (event) => {
    console.log('keydown event:', event)
})

document.addEventListener('keyup', (event) => {
    // console.log('keyup event:', event)

})

// действия браузера по умолчанию
/*
когда мы жмем клавишу клавиатуры, браузер
прежде всего обрабатывает событие keydown,
и в зависимости от обстоятельств браузер может
выполнять какие-то действия. когда у нас нет никаких
элементов в фокусе, браузер при нажатии на большинство
клавиш ничего не делает, если же я нажму клавишу pagedown,
то браузер проскролит страницу вниз. А если мы нажмем 
клавишу tab, сработает перебор фокусируемых элементов
и фокус попадет на первый такой элемент, на поле ввода,
браузер будет заполнять поле ввода соответствующими символами.
все эти примеры относятся к действию браузера по умолчанию. 
и каждое подобное действие можно отменить.
*/
// полностью убиваем accessability
document.addEventListener('keydown', (event) => {
    const { code, metaKey } = event

    // отмена pagedown
    if (
        code === 'arrowDown' && metaKey || // MacOS
        code === 'Numpad3' // windows и др. 
    ) {
        event.preventDefault()
        console.log('keydown declined!')
    }

    // отмена tab
    if (code === 'Tab') {
        event.preventDefault()
        console.log('Tab declined!')
    }
}) 

// отменяем нажатия числовых кнопок в поле ввода
/*
нам стоит отменить нажатия кнопок цифр на поле ввода,
ведь имя человека из цифр не состоит, при нажатии на 
кнопки цифр, мы видим в code Digit1, Digit2 и т.д. 

сейчас мы разобрали только те сценарии браузера, 
на которые мы можем как-то повлиять, отменив их
действия, но важно знать, что не всякое поведение
возможно предотвратить, некоторые hotkey будут работать
в браузере несмотря ни на что, а некоторые и вовсе завязаны
на уровне ОС, например, нельзя отменить hotkey закрытия
окна приложения. 
есть сервис, который удобно отображает информацию
о нажатиях: https://toptal.com/developers/keycode
*/

document.addEventListener('keydown', (event) => {
    // выполняем проверку нажатий, когда используется нужный input
    if (event.target.matches('input')) {
		// можно использовать регулярные выражения
		const AnyDigitRegExp = /\d/

        // регулярные выражения можно вынести в переменную
		if (AnyDigitRegExp.test(event.key)) {
			event.preventDefault()
			console.log('declined enter number:', event.key)
		}
	}
})

// для событий ввода некорректно использовать keydown и keyup
/*
задача: вывести приветствие с именем из input.

в этом примере код (при keydown) не сработал, хотя в терминале
все корректно, наш код отстает от актуальных значений
поля ввода. это все потому, что мы выполняем код в
момент нажатия клавиша клавиатуры, а в это время в поле
ввода в value все еще хранится предыдущие значения.

заменим keydown на keyup, но есть неприятное ощущение, 
так как текст обновляется в момент отпускания клавиши, 
создается эффект подлагивания интерфейса. но есть проблема
еще хуже, если я скопирую текст и потом вставлю в поле ввода,
то он просто не отобразится. если я скопирую через hotkey,
а не через меню, то все сработает, но нельзя же игнорировать
пользователей, которые проводят такие действия copy-paste 
мышкой, не используя клавиатуру. то же самое будет с обрезкой
текста cut.

все эти проблемы решаются input, каким бы способом мы
не вводили данные в поле ввода, событие input будет
отрабатывать всякий раз, когда в поле ввода обновляется
содержимое
*/
const inputElement = document.querySelector('.input-1')
const nameOutputElement = document.querySelector('.name-output')

// используем input и все работает как надо
inputElement.addEventListener('input', (event) => {
    console.debug('clicked:', event.key)

    nameOutputElement.textContent = inputElement.value
})

// событие изменения значения поля ввода
/*
если использовать input, то даже не успев ввести
слово, нам сразу будут тыкать ошибку - это агрессивное
поведение, поэтому лучше использовать change,
change отрабатывает во время потери фокусировки. 
*/
const bestInputElement = document.querySelector('.input-2')
const errorMessageElement = document.querySelector('#error-message')

bestInputElement.addEventListener('change', () => {
    const isInvalid = bestInputElement.value.length < 5

    bestInputElement.classList.toggle('is-invalid', isInvalid)
    errorMessageElement.textContent = isInvalid 
        ? 'min length - 5 symbols'
        : ''
})

// события изменения значения поля ввода
// обрезать
document.addEventListener('cut', (event) => {
    console.log('cut event:', event)

    // читаем информацию из буфера обмена
    navigator.clipboard.readText().then((clipboardText) => {
        console.log('clipboardText:', clipboardText)
    })
})

// копировать
document.addEventListener('copy', (event) => {
    console.log('copy event:', event)

    // читаем информацию из буфера обмена
    navigator.clipboard.readText().then((clipboardText) => {
        console.log('clipboardText:', clipboardText)
    })
})

// вставить 
document.addEventListener('paste', (event) => {
    console.log('paste event:', event)

    // читаем информацию из буфера обмена
    navigator.clipboard.readText().then((clipboardText) => {
        console.log('clipboardText:', clipboardText)
    })
})

/*
работает и при горячих клавишах и при обычном меню.
у этих событий есть свойство clipboardData, в нем
содержится информация о буфере обмен.

можно ее прочитать с помощью метода:
console.log(event.clipboardData.getData('text/plain')),
но корректно сработает он только у copy и paste. в 
остальных случаях он вернет пустую строку. есть решение  
*/