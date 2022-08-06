let b : [string, string, number] = ['malcolm', 'gladwell', 1963] // this is a set

b.push('')

console.log(b)

let arr2 : readonly number[]

type A = readonly string[]
type B = ReadonlyArray<string>
type C = ReadonlyArray<string[]>

type D = readonly [number, string]
type E = Readonly<[number, string]>