const Toys = require('./toys')

class Dolls extends Toys {
    constructor(name, price, size, hairColor) {
      super(name, price, size);
      this.hairColor = hairColor;
    }
  }

module.exports = Dolls

