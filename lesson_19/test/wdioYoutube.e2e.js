describe('Webdriver io YouTube channel', () => {
    it('should verify title of the opened page', async () => {
        await browser.url('https://webdriver.io');
        const searchElement = await $('.button.button--outline.button--secondary.button--lg.getStarted_Sjon[href="https://youtube.com/@webdriverio"]');
        await searchElement.click();

        await browser.waitUntil(async () => {
            const handles = await browser.getWindowHandles();
            return handles.length > 1; // Проверяем, что есть более одного окна (новая страница открыта)
        }, { timeout: 5000, timeoutMsg: 'Новая страница не открылась в течение 5 секунд' });

        
        const handles = await browser.getWindowHandles();
        await browser.switchToWindow(handles[handles.length - 1]);
        
       
        await browser.waitUntil(async () => {
            const title = await browser.getTitle();
            return title !== '';
        }, { timeout: 5000, timeoutMsg: 'Заголовок новой страницы не появился в течение 5 секунд' });

        const newPageTitle = await browser.getTitle();
        expect(newPageTitle).toBe('WebdriverIO - YouTube');
        await browser.pause(5000);
    });
});