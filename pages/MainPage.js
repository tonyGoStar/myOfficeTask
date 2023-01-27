const BasePage = require('./BasePage');
const AbstractElement = require('../elements/abstractElement');
const SearchItem = require('../elements/SearchItem');

class MainPage extends BasePage {
  constructor() {
    // SingleTon Implementation (future plan)

    // if (typeof MainPage.instance === 'object') {
    //   return MainPage.instance;
    // }
    super('');
    // MainPage.instance = this;
    // return this;
  }

  searchItem = new SearchItem('[data-hh-tab-id="searchVacancy"]');

  /**
   *
   * @param {string} companyName
   */
  searchByCompanyName(companyName) {
    this.searchItem.searchInput.waitForEnabled();
    this.searchItem.searchInput.setValue(companyName);
    this.searchItem.searchButton.waitAndClick()
  }
}

module.exports = MainPage;
