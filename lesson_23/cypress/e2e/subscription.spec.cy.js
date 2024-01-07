

const homePage = require('../../pages/homePage');

describe('Subscription on 5 element', ()=> {
    it('Should subscribe', ()=> {

        const emailLogin = Math.floor(Math.random() * 10000000000000)

        homePage.visitHomePage('https://5element.by');

        homePage.subscribeViaEmail(emailLogin);

        // хывахывхаыхвхывхах ну это уже смех
        // этот тест работал прекрасно три часа назад, поп-ап окошко даже вылазило, но теперь оно не вылазит... ура круто, классно, ура ура ура ура
    })
})

