const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

const app = express();

app.get('/', (req, res) => {
  res.send('server is running');
});

app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});
