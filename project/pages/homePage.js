const BasePage = require('./basePage');

class HomePage extends BasePage {
    get cookiePopupCloseButton() {
        return cy.get('.js-cookie-popup-close', { timeout: 10000 });
    }

    get catalogOpener() {
        return cy.get('.js-mm-opener');
    }

    get smartphonesButton() {
        return cy.get('[aria-label="3 / 12"] > .nav-item');
    }

    get smartphonesCategory() {
        return cy.get('[data-trig="drop-2"] > .catalog-navigation-trig');
    }

    get filterBodyChild() {
        return cy.get('#filters-0 > .filter-body > :nth-child(1) > :nth-child(2)');
    }

    get productBoxLink() {
        return cy.get(':nth-child(14) > .item-box > .item-box-link');
    }

    get productControlButton() {
        return cy.get(':nth-child(1) > :nth-child(1) > .card-product-full > :nth-child(3) > .c-controls > .btn');
    }

    get cartLink() {
        return cy.get('[href="/cart"]');
    }

    get sectionProductBody() {
        return cy.get('.section-product-body');
    }

    get deleteButton() {
        return cy.get(':nth-child(2) > .c-controls-btn > span');
    }

    get subscribeButton() {
        return cy.get('.f-subscribe__form > .btn');
    }

    get subscribeField() {
        return cy.get('.f-subscribe__form > input');
    }

    get subscriptionAgreement() {
        return cy.get('form > .inp-box > .inp-box__label > .inp-box__view');
    }
    get subscriptionResultText() {
        return  cy.get('[style=""] > .modal-popup > .modal-popup__head > .modal-popup-subheading');
    }

    get sortButton() {
        return cy.get('.filter-line > .inp-dropdown > .btn', { timeout: 10000 }).should('be.visible')
    }

    get sortFromLowToHigh() {
        return  cy.get('.inp-dropdown__list > :nth-child(2) > .inp-box > .inp-box__label > .inp-box__view', { timeout: 10000 })
    }






    visitHomePage(url) {
        cy.visit(url);
        this.cookiePopupCloseButton.should('be.visible').click();
    }


    findPhonesStraightFromHome() {
        this.smartphonesButton.click();
    }

    openMainMenu() {
        this.catalogOpener.click();
    }

    selectBrand() {
        this.filterBodyChild.click();
    }

    openProductsCatalog() {
        this.catalogOpener.click();
        this.smartphonesCategory.click();
    }

    addProductToCart() {
        this.productBoxLink.click();
        this.productControlButton.click();
    }

    removeProductFromCart() {
        this.deleteButton.click();
    }

    goToCart() {
        this.cartLink.click();
    }

    isCartNotEmpty() {
        return this.sectionProductBody.should('exist');
    }

    isCartEmpty() {
        return this.sectionProductBody.should('not.exist');
    }

    subscribeViaEmail(emailLogin) {

        this.subscribeButton.scrollIntoView();
        this.subscriptionAgreement.click();
        this.subscribeField.type(`${emailLogin}@lmao.rofl`);
        this.subscribeButton.click();
        this.subscriptionResultText.should('have.text', 'Ваша подписка успешно создана');
    }

    setMinPrice(price) {
        cy.get('#filter-price > .filter-body > :nth-child(1) > .form-row > :nth-child(1) > .inp').clear().type(price);
    }

    setMaxPrice(price) {
        cy.get('#filter-price > .filter-body > :nth-child(1) > .form-row > :nth-child(2) > .inp').focus().clear().type(price);
    }

    getProductPrice() {
        return cy.get(':nth-child(1) > :nth-child(1) > .card-product-full > :nth-child(3) > .c-cost > .c-price')
            .invoke('text')
            .then((priceText) => {
                return parseFloat(priceText.replace(/[^\d.-]/g, ''));
            });
    }

    sortByPrice() {
        this.sortButton.click();
        this.sortFromLowToHigh.click();
    }


}

module.exports = new HomePage();
