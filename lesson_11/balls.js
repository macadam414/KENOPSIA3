const Toys = require('./toys')

class Balls extends Toys {
    constructor(name, price, size, sport) {
      super(name, price, size);
      this.sport = sport;
    }
  }
  
  module.exports = Balls
// мне кажется, что параметр sport нарушает некоторые правила нейминга, но кого это волнует?
