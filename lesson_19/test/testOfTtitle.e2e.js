describe('Web page header test', () => {
  it('Should open website WebdriverIO', async () => {
    await browser.url('https://webdriver.io');
    const title = await browser.getTitle();
    expect(title).toBe('WebdriverIO · Next-gen browser and mobile automation test framework for Node.js | WebdriverIO');
  });
});