const { defineConfig } = require("cypress");

module.exports = defineConfig({
  pageLoadTimeout: 60000,
  defaultCommandTimeout: 60000,
  //retries: 3,
  e2e: {
    baseUrl: 'https://www.ryanair.com/ie/en',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});