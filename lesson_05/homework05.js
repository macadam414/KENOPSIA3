let a1 = 'ahaha' + true
console.log(a1, typeof(a1))
let b1 = '5' + 5
console.log(b1, typeof(b1))
let c1 = 5 + true
console.log(c1, typeof(c1))

let a2 = 'ahaha' * true
console.log(a2, typeof(a2))
let b2 = '5' * 5
console.log(b2, typeof(b2))
let c2 = 5 * true
console.log(c2, typeof(c2))

let a3 = 'ahaha' / true
console.log(a3, typeof(a3))
let b3 = '5' / 5
console.log(b3, typeof(b3))
let c3 = 5 / true
console.log(c3, typeof(c3))

let a4 = 'сейчас меня преобразуют'
a4 = Number(a4)
console.log(a4, typeof(a4))
let b4 = ''
b4 = Boolean(b4)
console.log(b4, typeof(b4))
let c4 = 1337
c4 = String(c4)
console.log(c4, typeof(c4))