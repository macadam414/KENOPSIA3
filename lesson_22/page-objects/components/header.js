const Base = require('../base')

class Header extends Base {
  constructor(page) {
    super(page);
    this.page = page;
  }

  get searchLink() {
    return this.page.locator('button.DocSearch.DocSearch-Button[aria-label="Search"]');
  }
}

module.exports = Header;