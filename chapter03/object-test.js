// let a : object = {
//     b: 'x'
// }
// object 指标是知道这个值是javascript对象，但不知道这个值的内部情况
var a = {
    b: 'X'
};
console.log(a.b);
var a1 = {
    b: 12
};
console.log(a1.b);
// 另一种声名方式
var c = {
    firstName: "Hello",
    lastName: "World"
};
// 使用class关键字
var Person = /** @class */ (function () {
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    return Person;
}());
var d1 = new Person("matt", "smith");
console.log(d1.firstName);
console.log(d1.lastName);
