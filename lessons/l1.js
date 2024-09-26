// TODO: рассказать про var чуть позже
// TODO: рассказать почему достаём из объекта через [] строкой


// Примитивы (простые типы данных)
const name = "todolist"; // string
const id = 0; // number
const isDone = false; // boolean false/true

const tasks1 = undefined // значение не определено
const tasks2 = null // отсутствие значения

// Сложные типы данных
// 1. Object
const todolist1 = {
    // ключ: значение
    id: 0,
    name: "todolist1",
    isDone: false,
}

const todolist2 = {
    id: 1,
    name: "todolist2",
    isDone: false,
}

// const human = {
//     name: "Dima",
//     age: 28,
//     isMaried: false,
//     address: {
//         country: "Республика Беларусь",
//         town: "Минск",
//         street: "ул.Пупкина"
//     },
//     car: undefined, // null
//     animals: [
//         { name: "Tosha", age: 2, type: "cat" },
//         { name: "Tuzik", age: 5, type: "dog" },
//     ],
// }

// console.log('### street', human.address.street)

// 1 способ достать значение из объекта
// todolist1.name - через точку
// 2 способ достать значение из объекта
// todolist1['id']

// 2. Array (массив) - индексы начинаются с нуля
// [1, 2, 3], ["Dima", "Vova"], [false, false, true], ["1", 1234, false]

// Привер индексов
//   0    1     2
// ["1", 1234, false]
// const w = ["1", 1234, false]
// console.log('### w', w[1])

// Если у нас массив массивов
//                0                           1
//        0            1              0            1
// [ [{name: "Q"}, {name: "W"}], [{name: "E"}, {name: "R"}] ]

const todolists = [todolist1, todolist2]

// console.log(todolists[0]) // достаёт значение из массива

// ДЗ
// 1) Запомнить примитивные типы данных и чем они отличаются (для чего нужны)
// 2) Запомнить сложные типы данных и чем они отличаются (для чего нужны)
// 3) Попробовать поэскпериментировать с типами данных
// 3.1) Создать структуру для системный блок
// 3.2) Создать список из 4 мобильных телефонов
// 4) Почитать про var let const

