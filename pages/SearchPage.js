const BasePage = require('./BasePage');
const AbstractElement = require('../elements/abstractElement');

class SearchPage extends BasePage {
  constructor() {
    super('');
  }

  employersTabBtn = new AbstractElement('[data-hh-tab-id="employersList"]');

  companyLinkName = new AbstractElement('a[href="/employer/213397"]');
}

module.exports = SearchPage;
