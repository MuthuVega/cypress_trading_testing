const pageLocators = require("../element_locators.json");

export class AccountsPage {
  // There are two ways of going this , either have a separate method for each element and assert here
  // OR return the value to test and assert the vale in the test

  // Examples of both aproaches below

  // Just return the account holder name element
  getAccountHolderName() {
    cy.get(pageLocators.accountsPage.accountHolderName).then(element => {
      let accountHolderName = element.text();
      cy.wrap(accountHolderName).as("accountHolderName");
    });
  }

  assertAccountHolderName(accountHolderName) {
    this.getAccountHolderName();
    cy.get("@accountHolderName").then(accHolderName => {
      expect(accHolderName).to.be.eq(accountHolderName);
    });
  }

  assertLoggedInUserName(loggedInUserName) {
    cy.get(pageLocators.accountsPage.userNameLabel).then(element => {
      // expect(element).to.be.text(loggedInUserName);
      expect(element).to.contain.text(loggedInUserName);
    });
  }

  assertDashBoardLink(dashBoardLinkText) {
    cy.get(pageLocators.accountsPage.dashBoardLink).then(element => {
      expect(element).to.be.text(dashBoardLinkText);
    });
  }

  assertAccountsLink(dashBoardLinkText) {
    cy.get(pageLocators.accountsPage.accountsLink).then(element => {
      expect(element).to.be.text(dashBoardLinkText);
    });
  }

  assertTxnHistoryLink(txnHistoryLinkText) {
    cy.get(pageLocators.accountsPage.txnHistoryLink).then(element => {
      expect(element).to.be.text(txnHistoryLinkText);
    });
  }

  assertAccountsPageNavigation() {
    cy.get(pageLocators.accountsPage.accountsLink).click();
    cy.url().should("eq", "https://hub.oanda.com/accounts");
  }

  assertTxnHistoryPageNavigation() {
    cy.get(pageLocators.accountsPage.txnHistoryLink).click();
    cy.url().should("eq", "https://hub.oanda.com/transaction-history");
  }
}
