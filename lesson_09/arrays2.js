function sumcheck(num) {
    let strnum = num.toString()
    let sum1 = parseInt(strnum[0]) + parseInt(strnum[1])+ parseInt(strnum[2])
    console.log(`sum of first three digits: ${sum1}`)
    let sum2 = parseInt(strnum[3]) + parseInt(strnum[4])+ parseInt(strnum[5])
    console.log(`sum of second three digits: ${sum2}`)
    if (sum1 === sum2) {
        console.log(`да`)
    }
    else {
        console.log(`нет`)
    }
}
sumcheck(163343)
sumcheck(133737)


function devision(num1, numrem) {
    for (i = num1; i >= numrem; i = i / 2) {

    }
    console.log(i)
}
devision(1000, 50)
// не знаю, насколько делать цикл пустым правильно, но оно работает...

// function avg() {
//     let arravg = Array.from(arguments)
//     let sumavg = 0
//     for (i = 0; i < arravg.length; i++){
//         sumavg += arravg[i]
//     }
//     let avgis = sumavg / arravg.length
//     console.log(avgis)
// }
// avg(12, 15, 20, 25, 59, 79)
// как-то некрасиво выглядит, как будто можно было сделать лучше... 
//сейчас попробую найти красивую функцию суммы, которая точно должна быть в js


function avg() {
    let arravg = Array.from(arguments)
    let sumavg = arravg.reduce((a, b) => a + b, 0)
    let avgis = sumavg / arravg.length
    console.log(avgis)
}
avg(12, 15, 20, 25, 59, 79)
// собственно вот и оно... красивое, а самое главное — рабочее


function insert(arrinsert, inspos, ...insexp) {
    arrinsert.splice(inspos, 0, ...insexp)
    console.log(arrinsert)
}
insert([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 8, 'a', 'b', 'c')


// каждый день учим что-то новое, поэтому сегодня я узнал, что "чередование" по-английски будет "alternation"
function alternation(arr1, arr2) { 
    let arrres = []
    let maxlength = Math.max(arr1.length, arr2.length)
    for (i = 0; i < maxlength; i++) {
        if (i < arr1.length) {
            arrres.push(arr1[i])
        }
        if (i < arr2.length) {
            arrres.push(arr2[i])
        }
    }
console.log(arrres)
}
alternation([1, 2, 3, 4, 5], [6, 7, 8, 9, 10, 11, 12, 13, 14, 15])


function sortupndown(upordown, ...number123) {
    const arrsort = Array.from(number123)
    if (upordown === "up") {
        arrsort.sort((a, b) => a - b)
        console.log(arrsort)
    }
    else if (upordown === "down") {
        arrsort.sort((a, b) => b - a)
        console.log(arrsort)
    }
    else {
        console.warn("Укажите метод сортировки up или down")
    }
}
sortupndown("up", 5, 7, 2, 1, 9, 11, 10, 3)
sortupndown("down", 5, 7, 2, 1, 9, 11, 10, 3)
sortupndown(5, 7, 2, 1, 9, 11, 10, 3)
// так ну поясню значится что я тут сделал... раз в условии не сказано, как именно нужно отсортировать массив, то я сам себе "усложнил" задание
// и сделал функцию, которой можно указать, как именно сортировать: по возрастанию (up) или по убыванию (down)
// ну вообще можно было бы и поприкольнее это реализовать, но мне кажется, что и так вышло неплохо :)





