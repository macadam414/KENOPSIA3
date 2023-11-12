const Toys = require('./toys')

class Cars extends Toys {
    constructor(name, price, size, brand) {
      super(name, price, size);
      this.brand = brand;
    }
  }

module.exports = Cars

