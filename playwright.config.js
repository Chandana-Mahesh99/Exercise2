// playwright.config.js

module.exports = {
    testDir: './tests', // Directory where your test files are located
    use: {
      headless: true, // Run tests in headless mode (without launching a browser window)
      baseURL: 'https://reqres.in/', // Base URL for the API
    },
    reporter: [['html', { open: 'always' }]], // Report test results in HTML format
  };
  