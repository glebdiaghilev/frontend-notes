/*
чтобы начать описывать тип для объектов существует два 
способа: interface и type.
разница между этими способами особо и нет. 
в базовом описании объекта можно считать что они - равнозначны.
хотя стоить отметить, что это не совсем верное утверждение и подробнее
это рассмотрится в другом конспекте!

если нам нужно указать, что какое-либо значение можно 
не указывать - используем знак ?.
*/
// описывание типа с помощью interface
interface Address {
    // говорим ts, что эти данные не обязательные, с помощью ?
    city?: string;
    street?: string;

    coords: number[]
}

// описывание типа с помощью type
type User = {
    firstName: string;
    age?: number
    address: Address;
}

// создание user
const user: User = {
    address: {
        coords: [5, 5]
    },
    firstName: 'gleb'
}

// создания массива users
const users: User[] = [{
    address: {
        coords: [6, 7]
    },
    firstName: 'max'
}]

// принимаем тип аргументом в функцию
function createUser(user: User) {
    console.log(user)
}

// примеры использования:
// параметры компонента:
type ComponentsProps = {
    className: string;
    color: 'red' | 'green';
}

// запросы сервера:
type ApiResponse<T> = {
    status: 'success' | 'error';
    data?: T;
}

// описывать функции:
type onClick = (event: Event) => void;