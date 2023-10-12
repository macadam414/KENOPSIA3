function countFriday13() {
    const startDate = new Date('2000-01-01');
    const endDate = new Date();
  
    let counter = 0;
  
    while (startDate <= endDate) {
      if (startDate.getDay() === 5 && startDate.getDate() === 13) {
        counter++;
      }
      startDate.setDate(startDate.getDate() + 1);
    }
    return counter;
  }
 let showfunc = countFriday13()
  console.log('Number of Fridays 13th:', showfunc);