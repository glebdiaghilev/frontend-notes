/*
у touchscreen есть свои специфичные события:
touchmove, touchstart, touched. 

у пк свои специфичные события: mousemove, mousedown,
mouseup, mouseover, mouseout, mouseenter, mouseleave.

но в современном фронтенде есть стандарт событий указателя
pointer events, фактически - это пачка новых событий,
которые корректно работают буквально на всех устройствах.

mousemove -> pointermove, mousedown -> pointerdown,
mouseup -> pointerup, mouseover -> pointerover,
mouseout -> pointerout, mouseenter -> pointerenter,
mouseleave - pointerleave,
так же есть: pointercancel, gotpointercapture, 
lostpointercapture. 
*/

const boxElement = document.querySelector('.box-4')

boxElement.addEventListener('pointerdown', (event) => {
    // в современном методе есть больше свойств event
    console.log(event)
})

// мультитач, пишем функцию и событие
// чтобы посмотреть мультитач, уберите комментарии с кода
// const addCircleElement = (x, y, isRed, label) => {
//     const circleElementMarkup = `
//     <div
//         class="circle ${isRed ? 'red' : ''}"
//         style="
//             top: ${y}px;
//             left: ${x}px;
//         "
//     >
//         <span class="circle__label">${label}</span>
//     </div>
//     `

//     document.body.insertAdjacentHTML('beforeend', circleElementMarkup)
// }

// document.addEventListener('pointerdown', (event) => {
//     console.log(event)

//     const { x, y, isPrimary, pointerId } = event

//     addCircleElement(x, y, isPrimary, pointerId)
// })

/*
с помощью мыши мультитач никак не получится,
а с телефона получится, с телефона у каждого нажатия
уникальный id, приложим несколько пальцев, первый кружок
будет красным, остальные два синими, с помощью событий
указателя и pointerevent можно реализовать любую задумку
по управлению интерфейсом. 
*/

// компонент drag and drop 
class DragAndDrop {
    selectors = {
        root: '[data-js-dnd]',
    }

    stateClasses = {
        isDragging: 'is-dragging',
    }

    initialState = {
        offsetX: null,
        offsetY: null,
        isDragging: false,
        currentDraggingElement: null,
    }

    constructor() {
        this.state = { ...this.initialState }
        this.bindEvents()
    }

    resetState() {
        this.state = { ...this.initialState }
    }

    onPointerDown(event) {
        const { target, x, y } = event
        const isDraggable = target.matches(this.selectors.root)
        
        if (!isDraggable) {
            return
        }

        target.classList.add(this.stateClasses.isDragging)

        const { left, top } = target.getBoundingClientRect()

        this.state = {
            offsetX: x - left,
            offsetY: y - top,
            isDragging: true,
            currentDraggingElement: target,
        }
    }

    onPointerMove(event) {
        if (!this.state.isDragging) {
            return
        }

        const x = event.pageX - this.state.offsetX
        const y = event.pageY - this.state.offsetY

        this.state.currentDraggingElement.style.left = `${x}px`
        this.state.currentDraggingElement.style.top = `${y}px`
    }

    onPointerUp() {
        if (!this.state.isDragging) {
            return
        }

        this.state.currentDraggingElement.classList.remove(this.stateClasses.isDragging)
        this.resetState()
    }

    bindEvents() {
        document.addEventListener('pointerdown', (event) => this.onPointerDown(event))
        document.addEventListener('pointermove', (event) => this.onPointerMove(event))
        document.addEventListener('pointerup', () => this.onPointerUp())
    }
}

new DragAndDrop()