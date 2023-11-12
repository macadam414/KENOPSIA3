const Toys = require('./toys')

class Cubes extends Toys {
    constructor(name, price, size, material) {
      super(name, price, size);
      this.material = material;
    }
  }
  
  module.exports = Cubes

