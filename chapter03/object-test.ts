// let a : object = {
//     b: 'x'
// }
// object 指标是知道这个值是javascript对象，但不知道这个值的内部情况

let a = {
    b : 'X'
}

console.log(a.b)

let a1: {b: number} = {
    b: 12
}

console.log(a1.b)

// 另一种声名方式
let c : {
    firstName: string
    lastName: string
} = {
    firstName : "Hello",
    lastName :"World"
}

// 使用class关键字
class Person {
    constructor(
        public firstName : string,
        public lastName: string
    ) {
    }
}

let d1 = new Person("matt", "smith")
console.log(d1.firstName)
console.log(d1.lastName)
