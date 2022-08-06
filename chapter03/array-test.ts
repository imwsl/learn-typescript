let arr1 = ['f']
arr1.push('e')
// arr1.push(true) tsc会出现错误，因为需要保证数组的一致性

function buildArray() {
    let a = []      // any
    a.push(1)       // number[]
    a.push('x')     // (string | number)[]

    return a
}

let myArray = buildArray()
myArray.push('g')