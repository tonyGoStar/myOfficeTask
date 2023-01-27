const AbstractElement = require('./abstractElement');

class VacanciesItem extends AbstractElement {
  constructor(selector) {
    super(selector);
  }

  allRoles = this.$$('[data-qa="vacancies-in-prof-role-switch"]');

  allVacancies = this.$$('[data-qa="vacancy-serp__vacancy-title"]');

  countOfVacancies = new AbstractElement('[data-qa="vacancies-in-region-counter"] span', this);

  testerRoleBtn = new AbstractElement('[data-qa*="vacancies-in-prof-role_124"] [data-qa="vacancies-in-prof-role-switch"]');

  testerRoleText = new AbstractElement('span', this.testerRoleBtn);

  vacancyLinkName = new AbstractElement('a[href*="vacancy/72355566"]');
}

module.exports = VacanciesItem;
