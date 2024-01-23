const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  projectId: process.env.PROJECT_ID,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
};
