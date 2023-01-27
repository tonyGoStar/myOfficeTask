const MainPage = require('../../pages/MainPage');
const SearchPage = require('../../pages/SearchPage');
const EmployerPage = require('../../pages/EmployerPage');
require('chai').should();
const { assert } = require('chai');
const chaiExpect = require('chai').expect;

describe('Head Hunter checkes', () => {
  before(() => {
  });

  it('should find company by name', async () => {
    // Step 0
    const searchText = 'мойофис'
    const companyName = 'МойОфис'

    // Step 1
    const mainPage = new MainPage();
    mainPage.searchByCompanyName(searchText)
    
    // Step 2
    const searchPage = new SearchPage();
    searchPage.employersTabBtn.waitAndClick()
    searchPage.companyLinkName.waitForDisplayed()
    assert.equal(searchPage.companyLinkName.getText(), companyName);

    // Step 3
    searchPage.companyLinkName.click();
  });

  it('should show correct count of vacancies', async () => {
    // Step 1
    const employerPage = new EmployerPage();
    employerPage.vacanciesItem.countOfVacancies.scroll();
    const expectedCount = employerPage.getCountOfExpVacancies();
    
    // Step 2
    employerPage.expandAllRoles();
    chaiExpect(employerPage.getCountOfVacancies()).to.equal(expectedCount);
  });

  it('should find correct role -> vacancy', async () => {
    // Step 0
    const roleText = 'Тестировщик';
    const vacancyText = 'QA Automation Engineer (JavaScript/Ruby)';
    
    // Step 1
    const employerPage = new EmployerPage();
    employerPage.vacanciesItem.testerRoleBtn.scroll();
    employerPage.getTesterRoleText().should.equal(roleText);
    
    // Step 2
    assert.equal(employerPage.vacanciesItem.vacancyLinkName.getText(), vacancyText);
  });
});
