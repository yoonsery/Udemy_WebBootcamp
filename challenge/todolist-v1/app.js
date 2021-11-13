const express = require('express');

const app = express();

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const day = {
  0: 'Sunday',
  1: 'Monday',
  2: 'Tuesday',
  3: 'Wednesday',
  4: 'Thursday',
  5: 'Friday',
  6: 'Saturday',
};

app.get('/', (req, res) => {
  let today = day[new Date().getDay()];

  // if (today === 'Saturday' || today === 'Sunday') {
  //   today = 'Weekend';
  // } else {
  //   today = 'Weekday';
  // }
  res.render('list', { kindOfDay: today });
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
