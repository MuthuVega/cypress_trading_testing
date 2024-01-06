import { AccountsPage } from "../page_object_model/accounts/accounts_page_methods.cy";

import "../support/commands";

describe("Accounts page tests", () => {
  let accountsPage = new AccountsPage();

  before(() => {
    cy.login_frontend();
  });

  it("Assert acc holder name on login", () => {
    accountsPage.getAccountHolderName();
    cy.get("@accountHolderName").then(accHolderName => {
      expect(accHolderName).to.be.eq("MUTHU PANDIAN VADIVELU");
    });

    accountsPage.assertAccountHolderName("MUTHU PANDIAN VADIVELU");
  });

  it("Assert loggged in user name", () => {
    accountsPage.assertLoggedInUserName(Cypress.env("OANDA_DEMO_USERNAME"));
  });

  it("Assert Account page links and navigation", () => {
    accountsPage.assertDashBoardLink("Dashboard");
    accountsPage.assertAccountsLink("Accounts");
    accountsPage.assertTxnHistoryLink("Transaction History");
    accountsPage.assertAccountsPageNavigation();
    cy.go("back");
    accountsPage.assertTxnHistoryPageNavigation();
    cy.go("back");
  });
});
