const express = require('express');

const app = express();
let items = ['Buy Groceries', 'Cook meals', 'Eat Food'];
let workItems = [];

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

  res.render('list', { listTitle: day, newListItems: items });
});

app.post('/', (req, res) => {
  let item = req.body.newItem;

  if (item.trim() === '') {
    return;
  }

  if (req.body.list === 'Work List') {
    workItems.push(item);
    res.redirect('/work');
  } else {
    items.push(item);
    res.redirect('/');
  }
});

app.get('/work', (req, res) => {
  res.render('list', { listTitle: 'Work List', newListItems: workItems });
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
