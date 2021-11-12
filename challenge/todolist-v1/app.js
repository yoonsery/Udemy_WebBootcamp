const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  const today = new Date();
  if (today.getDay() === 6 || today.getDay() === 0) {
    res.send(`Yeah! It's a weekend`);
  } else if (today.getDay() === 5) {
    res.write(`<h1>It's Friday night!</h1>`);
    res.write(`<p>And Saturday, Sunday WHAT?!</p>`);
    res.send();
  } else {
    res.send(`Nah...`);
  }
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
