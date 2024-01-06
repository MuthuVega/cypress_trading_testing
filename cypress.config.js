const { defineConfig } = require("cypress");

module.exports = defineConfig({
  compilerOptions: {
    types: ["Cypress"]
  },
  e2e: {
    defaultCommandTimeout: 15000,
    testIsolation: false,
    baseUrl: "https://hub.oanda.com",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    }
  }
});
