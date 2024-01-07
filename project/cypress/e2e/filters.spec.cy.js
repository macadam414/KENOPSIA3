const homePage = require('../../pages/homePage');

describe('Filters on 5element.by', () => {
    it('should filter search results in price range from 1337 to 4444 from low to high', () => {
        const minPrice = 1337;
        const maxPrice = 4444;


        homePage.visitHomePage('https://5element.by');

        homePage.findPhonesStraightFromHome();

        homePage.sortByPrice();

        homePage.setMinPrice(minPrice);
        homePage.setMaxPrice(maxPrice);

        homePage.getProductPrice()
            .then((priceValue) => {
                expect(priceValue).to.be.at.least(minPrice);
            });
    });
});