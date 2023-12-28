// @ts-check
const { test, expect } = require('@playwright/test');



test.describe('new suite', function () {
  test('has title', async ({ page }) => {
    const Base = require('../page-objects/base');
    const SearchPage = require('../page-objects/searchPage');
    const searchPage = new SearchPage(page);
    const MainPage = require('../page-objects/mainPage');
    const Header = require('../page-objects/components/header');
    const header = new Header(page);
    const base = new Base(page);
    const mainPage = new MainPage();
    await base.navigate('https://playwright.dev');
    await searchPage.search('api')
    await expect(searchPage.searchResult).toContainText('API');
   
    
  
  });
})

