const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    viewportWidth: 1440, // Ширина вікна
    viewportHeight: 900, // Висота вікна
  },
});
