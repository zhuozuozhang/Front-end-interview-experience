
let obj = {}

if (1) {
    let a = Symbol('aaaaa')
    obj[a] = 'hahaha'
    obj.get = function () {
        return obj[a]
    }
}

let abbb = Symbol()
let a = Symbol('aaaaa')

console.log(obj)

console.log(obj[a])

console.log(obj[abbb])

console.log(obj['get']())

console.log(Object.getOwnPropertySymbols(obj))

// console.log(obj[a])

// let son = {}

// son.__proto__ = obj

// console.log(son[a])

// obj.a = 'property a'

// obj[a] = '1234'

// console.log(obj)