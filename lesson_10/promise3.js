// function delay(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
//   }
  
//   function getRandomNumber(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
//   }
  
//   async function getNum1() {
//     await delay(3000);
//     return getRandomNumber(1, 5);
//   }
  
//   async function getNum2() {
//     await delay(5000);
//     return getRandomNumber(6, 10);
//   }
  
//   async function processNumbers() {
//     const result1 = await getNum1();
//     const result2 = await getNum2();
//     const sum = result1 + result2;
//     console.log(`Первое случайное число: ${result1}`);
//     console.log(`Второе случайное число: ${result2}`);
//     console.log(`Сумма чисел: ${sum}`);
//   }
  
//   processNumbers();


// ну вот это вот, конечно, выглядит страшно, а еще, наверное, это можно было бы обернуть в одну функцию, но какая разница, если оно работает
// ведь так?
// так ведь???
// или нет????????
// anyway, хорошей проверки домашки вам, Евгений :)


function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

async function getNum(delayTime, min, max) {
  await delay(delayTime * 1000);
  return getRandomNumber(min, max);
}

async function processNumbers() {
  const result1 = await getNum(3, 1, 5);
  console.log(`Первое случайное число: ${result1}`);
  
  const result2 = await getNum(5, 6, 10);
  console.log(`Второе случайное число: ${result2}`);
  
  const sum = result1 + result2;
  console.log(`Сумма чисел: ${sum}`);
}

processNumbers();



// исправляю домашку, видимо, в последний день ъавыъываъыаххывахывха
// как-то сказали уже после того, как я скинул ее на гит, что функция все же должна быть одна
// а еще это первый раз, когда я пользуюсь этой преференцией менять что-то в домашке после срока сдачи
// так вот: функция getNum теперь одна, но, кроме того, я заметил, что "первая версия" функции выводила все сразу, а не по очереди,
// как того требует условие, которое пришлось перечитать... ну вот теперь все точно красиво
// осталось всего-то разобраться с тайпскриптом (да поможет нам всем господь) и добить ООП (ну тут даже бог не поможет)
// и не умереть от повышенного артериального давления


