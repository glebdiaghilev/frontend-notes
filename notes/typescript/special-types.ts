/*
специальные типы:
1. any;
2. unknown;
3. never;
4. void.

с каждым из этих типов следует работать очень аккуратно, 
кроме void.

для проектов any - враг, для новичков - друг.
any полностью отключает любую проверку типов, указывая
any, можно использовать все, что угодно.

any является и надтипом и подтипом одновременно для всего.

unknown - безопасный способ, когда мы не знаем, какой тип нам
ожидается на вход, сделать его неизвестным, и потом с помощью 
нужных проверок безопасно его обработать.
unknown - это безопасный аналог any.
unknown вынуждает нас делать проверки на типы, 
использовать типы безопасно. если проверку на тип не 
сделать, то например, этот код:
value = data; - не сработает. а вот добавив:
if(typeof data === 'string') - сработает.

unknown является надтипом для всех типов, но он не может
быть подтипом.

never - тип, пустое множество. он является подтипом
всех других типов, например, если какая-то функция или
выражение не может вернуть значение или всегда пробрасывается
ошибка. к примеру можно взять цикл, который никогда 
не завершится - это и есть never.

never - это подтип для все всех типов, 
но не надтип для всех типов!

void - это тип, который означает, что функция ничего
не возвращает. он используется активно и в других языках
программирования.
у функции, которая ничего не возвращает, в ts по умолчанию 
всегда void, но стоит помнить, что в js функция, которая ничего
не возвращает, возвращает undefined по умолчанию.
*/
// специальный тип any
let handsomeValue: any;
handsomeValue = 5;
handsomeValue = false;
handsomeValue = [];
handsomeValue = {};

// специальный тип unknown
let coolValue: any;
coolValue = {};

function logData(data: unknown) {
    // let value: string = data; - нельзя
    let value: string;

    // вынужденная проверка на строку 
    if (typeof data === 'string') {
        // тут уже можно 
        value = data;
    }

    // вынужденная проверка на массив
    if (Array.isArray(data)) {
        return data
    }
}

// unknown - надтип, но не подтип
// присвоить значение - нет проблем
let superValue: unknown;

superValue = 67;
superValue = 'hello';
superValue = true;
superValue = { name: 'gleb' }

// ситуация наоборот - ошибка:
// let dumbValue: unknown;
// let str: string = dumbValue; - нельзя

// специальный тип never
// можно сделать так:
let amazingValue: never;
// был поставлен ! чтобы strict не подсвечивал пример
let someString: string = amazingValue!; 

// а так сделать уже нельзя:
// let string: string = '123';
// let coldestValue: never = string;

// пример где never очень полезный
enum Values {
    FIRST,
    SECOND
}

function fn(value: Values) {
    switch(value) {
        case Values.FIRST:
            return 1
        case Values.SECOND:
            return 2
        default:
            // полезно используем never
            const exhaustiveCheck: never = value;
            return value
    }
}

fn(Values.FIRST)
fn(Values.SECOND)

// пример использования void
function func(): void {
    console.log()
}

func()

// частое применение void, создаем тип для функции
type Fn = (arg: number, arg2: string) => void;