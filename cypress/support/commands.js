// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

const pageLocators = require("../page_object_model/element_locators.json");

Cypress.Commands.add("login_frontend", () => {
  cy.visit(Cypress.config("baseUrl"));
  // The demo user name and apssword are retrieved from env variables
  cy
    .get(pageLocators.loginPage.userName)
    .type(Cypress.env("OANDA_DEMO_USERNAME"));
  cy
    .get(pageLocators.loginPage.password)
    .click()
    .type(Cypress.env("OANDA_DEMO_PASSWORD"));
  cy.get(pageLocators.loginPage.loginButton).click();
  cy.wait(3000);
});
