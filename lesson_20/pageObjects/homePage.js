const { BasePage } = require('./basePage.js');

class HomePage extends BasePage {
    constructor() {
        super();
    }



    get youtubeButton() {
        return $('.button.button--outline.button--secondary.button--lg.getStarted_Sjon[href="https://youtube.com/@webdriverio"]');
    }


    async pressYoutubeButton() {
        await this.youtubeButton.waitForDisplayed();
        await this.youtubeButton.click();
    }

    async switchToLastWindow() {
        const handles = await browser.getWindowHandles();
        await browser.switchToWindow(handles[handles.length - 1]);
    }

    async waitForPageTitleToAppear(timeout = 5000) {
        await browser.waitUntil(async () => {
            const title = await browser.getTitle();
            return title !== '';
        }, { timeout, timeoutMsg: 'Заголовок новой страницы не появился в течение 5 секунд' });
    }

    

    async checkTabTtile() {
        const newPageTitle = await browser.getTitle();
        expect(newPageTitle).toBe('WebdriverIO - YouTube');
    }

};




const homePage = new HomePage();

module.exports = { homePage };
