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

  it("Assert account details", () => {
    cy.visit("/");
    cy.log("In this test");
    accountsPage.getAccountDetails();
    cy.get("@accountType").then(accountType => {
      expect(accountType).to.be.eq("v20");
    });

    cy.get("@accountType").then(accountType => {
      expect(accountType).to.be.eq("v20");
    });
    cy.get("@accountName").then(accountName => {
      expect(accountName).to.be.eq("DemoTest");
    });
    cy.get("@accountNumber").then(accountNumber => {
      expect(accountNumber).to.be.eq("101-004-27768358-002");
    });
    cy.get("@accountNAV").then(accountNAV => {
      expect(accountNAV).to.contain("£9");
    });
    cy.get("@accountBalance").then(accountBalance => {
      expect(accountBalance).to.contain("£9");
    });
    cy.get("@accountPandL").then(accountPandL => {
      expect(accountPandL).to.contain("£");
    });
    cy.get("@accountMarginUsedPercent").then(accountMarginUsedPercent => {
      expect(accountMarginUsedPercent).to.contain("%");
    });
    cy.get("@accountMarginAvailable").then(accountMarginAvailable => {
      expect(accountMarginAvailable).to.contain("£9");
    });
  });
});
