// describe('Search on 5element', ()=> {
//     it('Should find iPhone', ()=> {
//         cy.visit('https://5element.by/#/search/');
//         cy.get('.js-cookie-popup-close', { timeout: 10000 }).should('be.visible').click();

        
//         cy.get('.multi-search-header__form > .inp').type('iPhone{enter}');

//         cy.get('#app main div.product-tabs-content div.catalog-wrap div.c-description a').should('contain.text', 'iPhone')


//     })
// })


const homePage = require('../../pages/homePage');
const searchComponent = require('../../pages/components/searchComponents')

describe('Search on 5element', ()=> {
    it('Should find iPhone', ()=> {
        homePage.visitHomePage('https://5element.by/#/search/');
        searchComponent.searchProduct('iPhone');
        searchComponent.checkSearchResults('iPhone');


    })
})

