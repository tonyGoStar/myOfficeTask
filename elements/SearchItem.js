const AbstractElement = require('./abstractElement');

class SearchItem extends AbstractElement {
  constructor(selector) {
    super(selector);
  }

  searchInput = new AbstractElement('[data-qa="search-input"]');

  searchButton = new AbstractElement('[data-qa="search-button"]');
}

module.exports = SearchItem;
