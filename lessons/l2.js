// 1) Function declaration

// 1.1 - ключевое слово - function
// 1.2 - название
// 1.3 - параметры
// 1.4 - тело функции

const name = "Anton"

function fn1 () {
    // {
    //    name: "Dima"
    // }

    log('### name', name)
}

// fn1()
// fn1("Dima")

// 2) Function expression

const sum = function (num1, num2) {
    return (num1 + num2) * 2 / 10;
}

// log(sum(1, 3))

// 3) Стрелочная функция (Arrow function)

const sum2 = (num1, num2) => (num1 + num2) * 2 / 10;
// const sum2 = (num1, num2) => {
//     return (num1 + num2) * 2 / 10;
// }

const obj = {
    name: "Vova",
    sayHello() {
       console.log('### hello Dima')
    },
    sayHello2: function () {
        console.log('### hello Dima')
    },
    sayHello3: () => {
        console.log('### hello Dima')
    }
}

const human = {
    name: "Dima",
    age: 28,
    isMaried: false,
    address: {
        country: "Республика Беларусь ",
        town: "Минск",
        street: " ул.Пупкина"
    },
    car: undefined, // null
    animals: [
        { name: "Tosha", age: 2, type: "cat" },
        { name: "Tuzik", age: 5, type: "dog" },
    ],
    getFullAddress() {
        return this.address.country + this.address.town + this.address.street
    }
}

console.log('### address', human.getFullAddress())

// obj.sayHello()

// {}
// []
// 8
// "zxcvbnm"

const qwer = [1, 4, 8, 2, 10]

console.log('### qwer', qwer)

// qwer.push(250)
// qwer.pop()
// qwer.unshift(3)
// qwer.shift()

// qwer.map()
// qwer.filter()
// qwer.find()
// qwer.includes()
// qwer.forEach()
// qwer.join()

// console.log('### qwer', qwer)

// const str = "Zx-c"
// str.toLowerCase()
// str.toUpperCase()
// str.split()

