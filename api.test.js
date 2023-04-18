
const request = require('supertest');
const sum = require('./sum');
const resta = require('./resta');
const multiplicacion = require('./multiplicacion');
const app = require('./api');

test('sums two numbers', () => {
  expect(sum(1, 2)).toBe(3);
});

test('subtract two numbers', () => {
  expect(resta(1, 2)).toBe(-1);
});

test('multiply two numbers', () => {
  expect(multiplicacion(1, 2)).toBe(2);
});


test("should respond an string", async () => {
  const response = await request(app).get("/suma").send()
  expect(response.text).toBe("la suma de 1 y 2 es de: 3");
});


test("should respond an string", async () => {
  const response = await request(app).get("/resta").send()
  expect(response.text).toBe("la resta de 1 y 2 es de: -1");
});

test("should respond an string", async () => {
  const response = await request(app).get("/multiplicacion").send()
  expect(response.text).toBe("la multiplicacion de 1 y 2 es de: 2");
});