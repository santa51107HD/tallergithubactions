
const request = require('supertest');
const sum = require('./sum');
const app = require('./api');

test('sums two numbers', () => {
  expect(sum(1, 2)).toBe(3);
});


test("should respond an string", async () => {
  const response = await request(app).get("/suma").send()
  expect(response.text).toBe("la suma de 1 y 2 es de: 3");
});