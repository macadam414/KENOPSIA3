// describe('Favorite on 5element.by', ()=> {
//     it('should add products to favorite', ()=> {
       

//         cy.visit('https://5element.by');
//         cy.get('.js-cookie-popup-close', { timeout: 10000 }).should('be.visible').click();

//         cy.get('[aria-label="3 / 12"] > .nav-item').click();
//         cy.get(':nth-child(11) > .item-box > .item-box-link').click();
//         cy.get(':nth-child(1) > :nth-child(1) > .card-product-full > :nth-child(3) > .c-actions > [title="В сравнение"]').click();

        
         
//         cy.get(':nth-child(10) > .item-box').click();

//         cy.get(':nth-child(1) > .item-box > .btn').click();
        
//         cy.get(':nth-child(1) > :nth-child(1) > .card-product-full > :nth-child(3) > .c-actions > [title="В сравнение"]').click();
//         cy.get(':nth-child(1) > .n-item').click();
    
//         cy.get('.h-drop__bttns > .btn').click();
//         cy.get('.compare-body > :nth-child(1)').should('exist');


//     })
// })



const homePage = require('../../pages/homePage');
const comparisonPage = require('../../pages/comparisonPage')

describe('Comparison on 5element.by', ()=> {
    it('should compare products', ()=> {
       
        homePage.visitHomePage('https://5element.by');

        homePage.openProductsCatalog();

        comparisonPage.addProductToComparison();

        comparisonPage.goToComparisonPage();
        
        comparisonPage.isComparisonNotEmpty();




    })
})

