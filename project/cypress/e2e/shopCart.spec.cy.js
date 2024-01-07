describe('Shop cart on 5 element', () => {

    it('Shop cart should exist after adding products into it', () => {


      homePage.visitHomePage('https://5element.by');
      homePage.openProductsCatalog();
      homePage.selectBrand();
      homePage.addProductToCart();
      homePage.goToCart();
      homePage.isCartNotEmpty();
    });
});

