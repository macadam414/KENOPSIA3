
const homePage = require('../../pages/homePage');

describe('Shop cart clear on 5 element', () => {
  it('Shop cart should not exist after deleting products from it', () => {

    homePage.visitHomePage('https://5element.by');
    homePage.openProductsCatalog();
    homePage.selectBrand();
    homePage.addProductToCart();
    homePage.goToCart();
    homePage.removeProductFromCart();
    homePage.isCartEmpty();




  });
});

