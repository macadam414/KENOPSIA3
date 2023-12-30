describe('Поиск товара на 5element', () => {
  it('Поиск товара и проверка результатов', () => {
    const searchQuery = 'iphone';

    cy.visit('https://5element.by');
    cy.get('.js-cookie-popup-close', { timeout: 10000 }).should('be.visible');
    cy.get('.js-cookie-popup-close').click();

    cy.get('.js-mm-opener').click();
    cy.get('[data-trig="drop-2"] > .catalog-navigation-trig').click();
    cy.get('#filters-0 > .filter-body > :nth-child(1) > :nth-child(2)').click();
    cy.get(':nth-child(14) > .item-box > .item-box-link').click();
    cy.get(':nth-child(1) > :nth-child(1) > .card-product-full > :nth-child(3) > .c-controls > .btn').click();
    cy.get('[href="/cart"]').click();
    cy.get('.section-product-body').should('exist')

  });
});