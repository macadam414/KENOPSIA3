function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  
  async function getNum1() {
    await delay(3000);
    return getRandomNumber(1, 5);
  }
  
  async function getNum2() {
    await delay(5000);
    return getRandomNumber(6, 10);
  }
  
  async function processNumbers() {
    const result1 = await getNum1();
    const result2 = await getNum2();
    const sum = result1 + result2;
    console.log(`Первое случайное число: ${result1}`);
    console.log(`Второе случайное число: ${result2}`);
    console.log(`Сумма чисел: ${sum}`);
  }
  
  processNumbers();


// ну вот это вот, конечно, выглядит страшно, а еще, наверное, это можно было бы обернуть в одну функцию, но какая разница, если оно работает
// ведь так?
// так ведь???
// или нет????????
// anyway, хорошей проверки домашки вам, Евгений :)




