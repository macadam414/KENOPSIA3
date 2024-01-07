
// ладно, все не так с сайпрессом плохо, но все же невозможность сделать пробный логин мне не дает покоя... то ли дело в 5 элементе, то ли
// в высших силах, которые не хотят, чтобы это было возможно, но факт в том, что любая другая кнопка с верхней панели работает и отзывается,
// а "Вход" — нет... 
// ладно, буду думать дальше над этим, а потом весь этот мусор надо будет еще и в POM завернуть. Вау... нового года не будет...
// и, что самое страшное, дед мороз даже ислам не принимал

// но приятно видеть, что хотя бы это работает (хотя тоже пришлось приколоться с отклбчением скролла страницы, что, наверное, не лучшая идея)



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

