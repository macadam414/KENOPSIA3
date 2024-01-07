const BasePage = require('./basePage');

class ComparisonPage extends BasePage {

    get productToCompare() {
        return cy.get('.swiper-slide-visible.swiper-slide-active > .card-product > .c-nav > [aria-label="compare"] > .c-nav-item__icon').scrollIntoView();
    }


    get comparisonIcon() {
        return cy.get(':nth-child(1) > .n-item')
    }

    get comparisonPageButton() {
        return cy.get('.h-drop__bttns > .btn')
    }

    get comparisonBody() {
        return cy.get('.compare-body > :nth-child(1)')
    }

    addProductToComparison() {
        this.productToCompare.click();
    }


    goToComparisonPage() {
        this.comparisonIcon.click();
        this.comparisonPageButton.click();
    }

    isComparisonNotEmpty() {
        this.comparisonBody.should('exist')
    }

    
}

module.exports = new ComparisonPage();