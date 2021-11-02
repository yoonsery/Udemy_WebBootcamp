const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/bmiCalculator.html`);
});

app.post('/bmicalculator', (req, res) => {
  const weight = parseFloat(req.body.weight);
  const height = parseFloat(0.01 * Number(req.body.height));

  const bmi = (weight / Math.pow(height, 2)).toFixed(2);

  res.send(`Your BMI is ${bmi}`);
});

app.listen(port, (req, res) => {
  console.log(`Server started 🛠`);
});
