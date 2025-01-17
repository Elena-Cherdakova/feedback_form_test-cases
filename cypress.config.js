const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    defaultCommandTimeout: 30000,
    responseTimeout: 30000,
    pageLoadTimeout: 60000,
    requestTimeout: 30000,
    chromeWebSecurity: false,
    includeShadowDom: true,
    setupNodeEvents(on, config) {
    },
  },
});