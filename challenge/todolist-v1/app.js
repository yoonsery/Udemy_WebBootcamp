const express = require('express');

const app = express();
const items = ['Buy Groceries', 'Cook meals', 'Eat Food'];

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
  const today = new Date();
  const options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  };
  const day = today.toLocaleDateString('en-US', options);
  console.log(day);

  res.render('list', { kindOfDay: day, newListItems: items });
});

app.post('/', (req, res) => {
  const item = req.body.newItem;
  items.push(item);
  res.redirect('/');
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
