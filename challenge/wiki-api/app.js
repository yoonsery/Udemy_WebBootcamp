const express = require('express');
const mongoose = require('mongoose');
const ejs = require('ejs');
const dotenv = require('dotenv');

const app = express();

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

dotenv.config();

async function connectDB() {
  await mongoose.connect('mongodb://localhost:27017/wikiDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

connectDB() //
  .catch((err) => console.log(err));

const articleSchema = new mongoose.Schema({
  title: String,
  content: String,
});

const Article = mongoose.model('Article', articleSchema);

app
  .route('/articles') //

  .get((req, res) => {
    Article.find((err, foundArticles) => {
      if (!err) {
        res.send(foundArticles);
      } else {
        res.send(err);
      }
    });
  })

  .post((req, res) => {
    const newArticle = new Article({
      title: req.body.title,
      content: req.body.content,
    });
    newArticle.save((err) => {
      if (!err) {
        res.send('Successfully added a new article');
      } else {
        res.send(err);
      }
    });
  })

  .delete((req, res) => {
    Article.deleteMany((err) => {
      if (!err) {
        res.send('Successfully deleted all articles');
      } else {
        res.send(err);
      }
    });
  });

app
  .route('/articles/:articleTitle') //
  .get((req, res) => {
    Article.findOne({ title: req.params.articleTitle }, (err, foundArticle) => {
      if (foundArticle) {
        res.send(foundArticle);
      } else {
        res.send(`No articles matching that title was found`);
      }
    });
  });

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
