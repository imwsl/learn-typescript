type Age = number

type Dog = {
    name: string 
    age: Age
}

let age : Age = 29

let dog : Dog = {
    name: "Smith",
    age: age
}

console.log(dog.name)
console.log(dog.age) 