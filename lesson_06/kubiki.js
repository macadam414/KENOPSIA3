let sum1 = 0
let i = 0
while (i < 3) {
    i++
    a = 1 + Math.floor(Math.random() * 6)
    console.log(`${i} score of first player is ${a}`)
    sum1 = sum1 + a
}
console.log(`First player's sum is ${sum1}`)
let sum2 = 0
let n = 0
while (n < 3) {
    n++
    b = 1 + Math.floor(Math.random() * 6)
    console.log(`${n} score of second player is ${b}`)
    sum2 = sum2 + b
}
console.log(`Second player's sum is ${sum2}`)
if (sum1 > sum2) {
    console.log('Winner is Player One')
}
else if (sum1 < sum2){
    console.log('Winner is Player Two')
}
else {
    console.log('No winners in a war :(')
}

//ну кстати после выполнения третьего задания и изучения метода .push, я понял, что вывод в консоль можно было бы сделать более красивым и читабельным: добавив все выбитые на "кубике" числва в массив, но пусть все будет так, как я сделал это изначально: нечитабельно, но с душой