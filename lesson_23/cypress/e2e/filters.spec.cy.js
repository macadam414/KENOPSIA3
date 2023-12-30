describe('Filters on 5element.by', ()=> {
    it('should filter search results in price range from 1337 to 4444 from low to high', ()=> {
        const minPrice = 1337
        const maxPrice = 4444



        cy.visit('https://5element.by');
        cy.get('.js-cookie-popup-close', { timeout: 10000 }).should('be.visible').click();

        cy.get('[aria-label="3 / 12"] > .nav-item').click();
        cy.get('.filter-line > .inp-dropdown > .btn', { timeout: 10000 }).should('be.visible').click();
        cy.get('.inp-dropdown__list > :nth-child(2) > .inp-box > .inp-box__label > .inp-box__view', { timeout: 10000 }).should('be.visible').click();
        cy.get('#filter-price > .filter-body > :nth-child(1) > .form-row > :nth-child(1) > .inp').clear().type(minPrice);
        cy.wait(1000)
        cy.get('#filter-price > .filter-body > :nth-child(1) > .form-row > :nth-child(2) > .inp').focus().clear().type(maxPrice);



        cy.get(':nth-child(1) > :nth-child(1) > .card-product-full > :nth-child(3) > .c-cost > .c-price')
            .invoke('text')
            .then((priceText) => {
                const priceValue = parseFloat(priceText.replace(/[^\d.-]/g, ''));
                expect(priceValue).to.be.at.least(minPrice);
            });
    })
})

// ладно, все не так с сайпрессом плохо, но все же невозможность сделать пробный логин мне не дает покоя... то ли дело в 5 элементе, то ли
// в высших силах, которые не хотят, чтобы это было возможно, но факт в том, что любая другая кнопка с верхней панели работает и отзывается,
// а "Вход" — нет... 
// ладно, буду думать дальше над этим, а потом весь этот мусор надо будет еще и в POM завернуть. Вау... нового года не будет...
// и, что самое страшное, дед мороз даже ислам не принимал

// но приятно видеть, что хотя бы это работает (хотя тоже пришлось приколоться с отклбчением скролла страницы, что, наверное, не лучшая идея)