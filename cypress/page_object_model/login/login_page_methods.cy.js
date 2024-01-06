const pageLocators = require("../element_locators.json");

export class LoginPage {
  enterUserName(userName) {
    cy.get(pageLocators.loginPage.userName).type(userName);
  }

  enterPassword(password) {
    cy.get(pageLocators.loginPage.password).click().type(password);
  }

  clickLogin() {
    cy.get(pageLocators.loginPage.loginButton).click();
  }
}
