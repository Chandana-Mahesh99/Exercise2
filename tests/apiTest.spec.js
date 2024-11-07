const { test, expect } = require('@playwright/test');

test('Validate GET request response status code', async ({ request }) => {
  // Step 1: Make the GET request to the API
  const response = await request.get('https://reqres.in/api/users/2');

  // Step 2: Log the response status code and body to the console
  console.log('Status Code:', response.status());
  const responseBody = await response.json();  // Parse the response body as JSON
  console.log('Response Body:', responseBody);

  // Step 3: Validate the status code is 200
  expect(response.status()).toBe(200);  // Check if status code is 200

  // Step 4: Optionally validate the response body
  expect(responseBody.data.id).toBe(2);  // Check if the user ID in the response is 2
  expect(responseBody.data.first_name).toBe('Janet');  // Check first name if expected
});
