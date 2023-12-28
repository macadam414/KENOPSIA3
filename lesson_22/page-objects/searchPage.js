const Base = require('./base');
const Header = require('./components/header');


class SearchPage extends Base {
    constructor(page) {
        super(page);
        this.header = new Header(page);
    }


    get searchField() {
        return this.page.locator('input.DocSearch-Input#docsearch-input[type="search"][placeholder="Search docs"]');

    }

    get searchButton() {
        return this.page.locator('button.DocSearch.DocSearch-Button[aria-label="Search"]');

    }

    get searchResult() {
        return this.page.locator('#docsearch-list')
    }



    async search(searchText) {
        await this.header.searchLink.click();
        await this.searchField.fill(searchText);
        await this.page.waitForSelector('body > div:nth-child(1) > div > div > div > div > section:nth-child(1)');
        await this.searchField.press('Enter');
        await this.searchButton.click();
    }
}


module.exports = SearchPage;