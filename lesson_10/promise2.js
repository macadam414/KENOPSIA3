function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  
  async function getNum() {
    await delay(3000);
    return getRandomNumber(1, 5);
  }
  
  async function processNumber() {
    const result = await getNum();
    const squaredResult = result * result;
    console.log(`Случайное число: ${result}, число в квадрате: ${squaredResult}`);
  }
  
  processNumber();

// кстати да, функция называется delay, что употребляется в том числе в качестве глагола, так что все с кайфом :)


