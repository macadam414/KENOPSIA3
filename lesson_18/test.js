const { Builder, By, until, Key } = require('selenium-webdriver');

(async function() {
    const driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get('https://chromedriver.chromium.org');
        await driver.manage().window().maximize();

        const textElement = await driver.wait(
            until.elementLocated(By.css('span.Rn3Z1b.C9DxTc')), 
            10000
        );
        const text = await textElement.getText();
        console.log('Text:', text);

        if (text !== 'ChromeDriver') {
            console.log('Text does not match! Stopping script.');
            return;
        }

        const clickChromeExtensionsButton = await driver.findElement(By.css('.plFg0c a[href="/extensions"]'));
        await clickChromeExtensionsButton.click();

        const textToHighlight = await driver.wait(
            until.elementLocated(By.css('span.Rn3Z1b')), 
            10000
        );

        await driver.executeScript(
            `arguments[0].setAttribute('style', 'border: 2px solid red; background-color: yellow;')`, 
            textToHighlight
        );

        await driver.wait(async function() {
            const newTextElement = await driver.findElement(By.css('span.Rn3Z1b'));
            const newText = await newTextElement.getText();
            return newText !== text;
        }, 10000);

        const searchButton = await driver.findElement(By.css('div.U26fgb.mUbCce.fKz7Od.iWs3gf.Wdnjke.M9Bg4d'));
        await searchButton.click();

        await driver.sleep(3000);

        const searchField = await driver.findElement(By.css('div.Xb9hP input'));
        await searchField.sendKeys('driver', Key.ENTER);

        const urlToCheck = await driver.wait(
            until.elementLocated(By.css('div.yDWqEe')),
            10000
        );
        const urlText = await urlToCheck.getText();
        console.log('URL text:', urlText);


        let textExpected = 'driver'
        if (!urlText.includes(textExpected)) {
            console.log(`The word "${textExpected}" is not present in the URL text! Stopping script.`);
            return;
        }

        await driver.sleep(5000);
    } finally {
        await driver.quit();
    }
})();
