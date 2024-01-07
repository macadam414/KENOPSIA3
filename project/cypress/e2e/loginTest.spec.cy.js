describe('Login on 5element.by', () => {
    it('Should reject the wrong number', () => {
        const numberInput = '123123123';
        const passwordInput = '321321321';

        cy.visit('https://5element.by');
        cy.get('.js-cookie-popup-close', { timeout: 10000 }).should('be.visible').click();

        cy.wait(2000)

        cy.get('#app > header > div.g-header > div.h-panel-top > div > div > div.h-controls > a:nth-child(3) > div').click();

    });
});