
function reverse() {
    const arr1 = Array.from(arguments)
    arr1.reverse()
    console.log(arr1)
}
reverse(1, 2, 3, 4, 5)


function maxnum() {
    const arr2 = Array.from(arguments)
    let maxnumber = Math.max(...arr2)
    console.log(maxnumber)
}
maxnum(5, 10, 15, 24, 42, 84, 1337, 44, 55, 77, 88, 33, 2077)



// function fibonachiitself(number){
//         return number <= 1 ? number : fibonachiitself(number - 1) + fibonachiitself(number - 2);
//     }
//  function getFibonachi (n, m) {
//             const arrfib = []
//             for (let i = n; i < n + m; i++) {
//                 arrfib.push(fibonachiitself(i))
//             }
//             return arrfib
//         }
//         const arrfib = getFibonachi(7, 4)
//         console.log(arrfib)


function getFibonachi (n, m) {
    function fibonachiitself(number){
        return number <= 1 ? number : fibonachiitself(number - 1) + fibonachiitself(number - 2);
    }
    const arrfib = []
    for (let i = n; i < n + m; i++) {
        arrfib.push(fibonachiitself(i))
    }
    return arrfib
}
console.log(getFibonachi(7, 9))

// ну... это более красивая запись, когда две функции не отдельно, как выше, а функция в функции... внутренняя из которых еще и вызывает сама себя... о да...



function comparison(num1, num2) {
    const counterarr = []
    str1 = num1.toString()
    str2 = num2.toString()
    let counterval = 0
    let countervalpos = 0
    for (j = 0; j < str1.length; j++){
        if (str1[j] === str2[j]) {
        countervalpos++
        }
        else if (str1.includes(str2[j])){
            counterval++
        } 
    }
    counterarr.push(countervalpos, counterval)
    return counterarr
}
console.log(comparison(3487, 3794))

//кажется оно работает... 

function sortup() {
    const arrsu = Array.from(arguments)
    arrsu.sort((a, b) => a - b)
    return arrsu
}
console.log(sortup(10, 12, 88, 1, 5, 3, 77, 183, 15))



function sortdown() {
    const arrsd = Array.from(arguments)
    arrsd.sort((a, b) => b - a)
    return arrsd
}
console.log(sortdown(10, 12, 88, 1, 5, 3, 77, 183, 15))



function arraydelete() {
    const arrdel = Array.from(arguments)
   return arrdel.filter((a, b) => {
    return arrdel.indexOf(a) === b
   })
}

console.log(arraydelete(1, 1, 5, 6, 7, 7, 9))

