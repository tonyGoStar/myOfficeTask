const BasePage = require('./BasePage');
const AbstractElement = require('../elements/abstractElement');
const VacanciesItem = require('../elements/VacanciesItem');

class EmployerPage extends BasePage {
  constructor() {
    super('');
  }

  vacanciesItem = new VacanciesItem('[data-qa="vacancies-in-region vacancies-in-region_current"]');

  expandAllRoles() {
    this.vacanciesItem.allRoles.forEach((elem) => {
      elem.waitAndClick()
    });
  }

  getCountOfVacancies() {
    return this.vacanciesItem.allVacancies.length;
  }

  getCountOfExpVacancies() {
    return Math.floor(this.vacanciesItem.countOfVacancies.getText());
  }

  getTesterRoleText() {
    return this.vacanciesItem.testerRoleText.getText();
  }
}

module.exports = EmployerPage;
