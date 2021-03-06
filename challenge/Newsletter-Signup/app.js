const express = require('express');
const request = require('request');
const dotenv = require('dotenv');
const mailchimp = require('@mailchimp/mailchimp_marketing');

const app = express();

dotenv.config();

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: 'us20',
});

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/signup.html`);
});

app.post('/', (req, res) => {
  const firstName = req.body.fName;
  const lastName = req.body.lName;
  const email = req.body.email;

  const listId = process.env.MAILCHIMP_ID;
  const subscribingUser = {
    firstName,
    lastName,
    email,
  };

  async function run() {
    const response = await mailchimp.lists.addListMember(listId, {
      email_address: subscribingUser.email,
      status: 'subscribed',
      merge_fields: {
        FNAME: subscribingUser.firstName,
        LNAME: subscribingUser.lastName,
      },
    });

    res.sendFile(`${__dirname}/success.html`);
  }

  run().catch((e) => res.sendFile(`${__dirname}/failure.html`));
});

app.post('/failure', (req, res) => {
  res.redirect('/');
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on port 3000`);
});
