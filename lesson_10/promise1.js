function delay(min, max) {
    return new Promise((resolve) => {
      const delayTime = Math.floor(Math.random() * (max - min + 1) + min);
      setTimeout(resolve, delayTime);
    });
  }
  
  async function runPromisesInSequence() {
    for (let i = 1; i <= 3; i++) {
      await delay(1000, 5000);
      console.log(`Промис ${i} завершен:`, i);
    }
  }
  
  runPromisesInSequence();

// это не совсем похоже на ту последовательность промиса за промисом, но делает оно то, что сказано в задании, а выглядит приятно,
// так что пусть будет так


