//Ну ща будет сложение разных типов
let a = 'string' + true
console.log(a, typeof(a))
let b = '5' + 5
console.log(b, typeof(b))
let c = 5 + true
console.log(c, typeof(c))

//ну по тайпофам а -- стринг б --стринг с -- намбер

let a1 = 'string' * true
console.log(a1, typeof(a1))
let b1 = '5' * 5
console.log(b1, typeof(b1))
let c1 = 5 * true
console.log(c1, typeof(c1))

//

let a2 = 'string' / true
console.log(a2, typeof(a2))
let b2 = '5' / 5
console.log(b2, typeof(b2))
let c2 = 5 / false
console.log(c2, typeof(c2))

//дада тут я решил не тру, а фолс сделать, чтобы было прикольно... ну типа бесконечность да круто

let a3 = String(5)
console.log(a3, typeof(a3))

let b3 = Number('hello')
console.log(b3, typeof(b3))

let c3 = Boolean(null)
console.log(c3, typeof(c3))

//ну и все оставим null чтобы прикольно

//ну и видимо это вся домашка... было проще, яем с fs-extra... ну как-то так
