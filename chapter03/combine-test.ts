type Cat = {name: string, purrs: boolean}
type Sheep = {name: string, barks: boolean, wags: boolean}

type CatOrSheep = Cat | Sheep

// cat
let cat1 : CatOrSheep = {
    name: 'Bonkers',
    purrs: true
}
