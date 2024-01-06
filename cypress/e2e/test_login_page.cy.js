import { AccountsPage } from "../page_object_model/accounts/accounts_page_methods.cy";
import { LoginPage } from "../page_object_model/login/login_page_methods.cy";

const pageLocators = require("../page_object_model/element_locators.json");

describe("OANDA Login Page tests", () => {
  let loginPage = new LoginPage();
  let accountsPage = new AccountsPage();

  it("OANDA Login page successful login", () => {
    cy.visit(Cypress.config("baseUrl"));
    // The demo user name and apssword are retrieved from env variables
    loginPage.enterUserName(Cypress.env("OANDA_DEMO_USERNAME"));
    loginPage.enterPassword(Cypress.env("OANDA_DEMO_PASSWORD"));
    loginPage.clickLogin();
    // Make sure we are logged in by checking for the welcome banner in the accounts page
    accountsPage.assertAccountHolderName("MUTHU PANDIAN VADIVELU");
  });
});
