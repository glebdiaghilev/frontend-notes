/*
представим, что у нас есть коробка. она обладает
характеристиками: длина, ширина, высота. и в эту
коробку можно поместить определенное содержимое.
как с точки зрения типов определить, что находится
в коробке? строка? объект? число? для этого есть
generics.

мы создаем условный generic, можно считать, что это,
как аргумент для функции, только для типа. после же,
когда мы используем: тип, класс, функцию - в которую
мы задали generic, можем указать, какой тип там будет
использоваться. 

generic может использоваться в интерфейсах, в типах,
в функциях, в классах, - этот инструмент добавляет
гибкости при работе с кодом. множество инструментов
работают поверх generic.

название у generics может быть любым, но обычно первый
generic называют <T> (сокращено type).

за счет generic мы делаем типы динамическими,
добавляем некоторые изменяемые типы внутрь, которые 
доступны только в пределах данного класса, функции и т.д.

у generic есть ограничения (constraints). мы можем ограничить
типы, задаваемые у generic.

у generic можно задавать не только ограничения, но и
стандартное значение: <Data = string>.
*/
// generics
interface MetaData {

}

interface User {
	username: string
	id?: string
	createdAt?: Date
}

interface Article {
    title: string;
}

// работаем с generics
interface ApiResponse<T> {
    status?: 'error' | 'success';
    meta?: MetaData;
    requestId?: string;
    data: T;
}

// теперь мы указываем тип
const responseFromUserApi: ApiResponse<User> = {
    // заполняем data
    data: {
        // заполняем нужные поля 
        username: 'NaCi'
    }
}

const responseFromArticleApi: ApiResponse<Article> = {
    data: {
        title: 'ai kills everyone!'
    }
}

// можно указывать несколько generic
interface example<meta, google, microsoft> {
	meta: meta
	google: google
	microsoft: microsoft
}

const companies: example<string, number, boolean> = {
    meta: 'string',
    google: 67,
    microsoft: false
}

// пример использования generic
interface Tree<T> {
    id: string;
    value: T;
    children: Tree<T>[] | null;
}

const treeNode: Tree<User> = {
    id: '10',
    value: {
        username: 'steamed'
    },
    children: [
        {
            id: '11',
            value: {
                username: 'grilled'
            },
            children: null
        }
    ]
}

// работа с generic в функциях
function genericFn<T>(arg: T) {
    return arg;
}

const arrowGeneric = <T, V>(arg: T): T => {
    return arg;
}

const data = arrowGeneric<User, Article>({username: '123'})

// ограничение generic
function createEntity<T extends {id: string, createdAt: Date}>(arg: T) {
    arg
}

/*
если бы не указали: id: string, createdAt: Date, то
вылезла бы ошибка, и <User> не сработал бы. это и
есть ограничения generic.
*/
createEntity<User>({})

// работа с generic в классах
class Order<T> {
    private data: T;

    constructor(arg: T) {
        this.data = arg;
    }
}

// задаем стандартное значение
interface ApiResponse2<Data = string> {
    status?: 'error' | 'success';
    requestId?: string;
    data: Data;
}

// ts не требует обязательной передачи generic
const response2: ApiResponse2 = {
    data: 'str'
}