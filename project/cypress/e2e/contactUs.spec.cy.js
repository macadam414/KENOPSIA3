describe('Contact Us button on 5 element', ()=> {
    it('Should reject', ()=> {
        cy.visit('https://5element.by');
        cy.get('.js-cookie-popup-close', { timeout: 10000 }).should('be.visible').click();

        cy.get(':nth-child(2) > .h-nav__link').click()

        cy.get('div[data-v-5abc7e6e=""] > .btn').click()

    })
})
