// utils/apiHelper.js
const { request } = require('@playwright/test');

async function getRequest(url) {
  const response = await request.get(url);
  return response;
}

module.exports = { getRequest };
