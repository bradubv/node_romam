const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './qa',
  testMatch: ['tests-crosspage.spec.js'],
  fullyParallel: false,
  timeout: 30000,
  retries: 0,
  use: {
    baseURL: 'http://127.0.0.1:3000',
    headless: true,
  },
  webServer: {
    command: 'node romam.js',
    url: 'http://127.0.0.1:3000',
    reuseExistingServer: true,
    timeout: 120000,
  },
});
