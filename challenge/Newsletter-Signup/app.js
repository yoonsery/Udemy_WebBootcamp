const express = require('express');
const request = require('request');
const dotenv = require('dotenv');

const app = express();
app.use(express.json());
app.use(express.urlencoded());

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/signup.html`);
  
  
});

app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
  
});
