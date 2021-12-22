const express = require('express');
const mongoose = require('mongoose');
const ejs = require('ejs');
const _ = require('lodash');
const dotenv = require('dotenv');

const app = express();

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

dotenv.config();

const articleSchema = new mongoose.Schema({
  title: String,
  content: String,
});

const Article = mongoose.model('article', articleSchema);

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
