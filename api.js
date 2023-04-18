const express = require('express')
const sum = require('./sum');
const resta = require('./resta');
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('PRUEBA API')
})

app.get('/suma', (req, res) => {
  valor= sum(1,2)
  string="la suma de 1 y 2 es de: " + valor
  res.send(string)
})

app.get('/resta', (req, res) => {
  valor= resta(1,2)
  string="la resta de 1 y 2 es de: " + valor
  res.send(string)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

module.exports = app;