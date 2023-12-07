describe('webdriver io official website', () => {
it('', async () => {
    await browser.url('https://webdriver.io');
    const searchElement = await $('.DocSearch.DocSearch-Button');
    await searchElement.click();
    const searchField = await $('#docsearch-input');
    await searchField.setValue('hooks');
    const docsHint = await $('[href="/docs/configuration/#hooks"]');
    await docsHint.waitForClickable();
    await docsHint.click();
    await browser.pause(5000);
})
});