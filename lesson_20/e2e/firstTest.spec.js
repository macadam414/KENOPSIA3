const { expect } = require('chai');

const { homePage } = require('../pageObjects/homePage.js');
const { windowSwapComponents } = require('../pageObjects/pageComponents/windowSwapComponents.js');


describe('Webdriver io YouTube channel', () => {


    it('should verify title of the opened page', async () => {
        await homePage.navigate('https://webdriver.io');
        // await browser.url('https://webdriver.io'); 
    
        // господь помоги, у меня целый час ничего не работало из-за этих ****** импортов АААААААААААААААААААААААА


        await homePage.pressYoutubeButton();

        // const searchElement = await $('.button.button--outline.button--secondary.button--lg.getStarted_Sjon[href="https://youtube.com/@webdriverio"]');
        // await searchElement.click();

        await browser.waitUntil(async () => {
            const handles = await browser.getWindowHandles();
            return handles.length > 1; 
        }, { timeout: 5000, timeoutMsg: 'Новая страница не открылась в течение 5 секунд' });


        await windowSwapComponents.switchToLastWindow();

        // const handles = await browser.getWindowHandles();
        // await browser.switchToWindow(handles[handles.length - 1]);


        await homePage.waitForPageTitleToAppear();

        // await browser.waitUntil(async () => {
        //     const title = await browser.getTitle();
        //     return title !== '';
        // }, { timeout: 5000, timeoutMsg: 'Заголовок новой страницы не появился в течение 5 секунд' });



        await homePage.checkTabTtile();

        // const newPageTitle = await browser.getTitle();
        // expect(newPageTitle).to.equal('WebdriverIO - YouTube');
        await browser.pause(5000);
    });
});