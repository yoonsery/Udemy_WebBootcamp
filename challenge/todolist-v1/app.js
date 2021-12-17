const express = require('express');
const mongoose = require('mongoose');
const _ = require('lodash');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

mongoose
  .connect(
    `mongodb+srv://${process.env.USER_NAME}:${process.env.PASSWORD}@cluster0.puco5.mongodb.net/todolistDB?retryWrites=true&w=majority`
  )
  .then(() => console.log(`MongoDB connected...`))
  .catch((err) => console.log(err));

const itemsSchema = new mongoose.Schema({
  name: String,
});

const Item = mongoose.model('item', itemsSchema);

const welcome = new Item({
  name: 'Welcome to your todolist',
});

const item1 = new Item({
  name: 'Hit the + button to add a new item',
});

const item2 = new Item({
  name: '👈🏻 Hit this to delete an item',
});

const defaultItems = [welcome, item1, item2];

const listSchema = new mongoose.Schema({
  name: String,
  items: [itemsSchema],
});

const List = mongoose.model('list', listSchema);

app.get('/', (req, res) => {
  Item.find({}, (err, foundItems) => {
    if (foundItems.length === 0) {
      Item.insertMany(defaultItems, (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log('Add Succesfully!');
        }
        res.redirect('/');
      });
    } else {
      res.render('list', { listTitle: 'Today', newListItems: foundItems });
    }
  });
});

app.get('/:customListName', (req, res) => {
  const customListName = _.capitalize(req.params.customListName);

  List.findOne({ name: customListName }, (err, foundList) => {
    if (!err) {
      if (!foundList) {
        // create a new list
        const list = new List({
          name: customListName,
          items: defaultItems,
        });
        list.save();
        res.redirect(`/${customListName}`);
      } else {
        // show existing list
        res.render('list', {
          listTitle: foundList.name,
          newListItems: foundList.items,
        });
      }
    }
  });
});

app.post('/', (req, res) => {
  const itemName = req.body.newItem;
  const listName = req.body.list;
  const trimmed = itemName.trim();

  const item = new Item({
    name: itemName,
  });

  if (listName === 'Today') {
    trimmed && item.save();
    res.redirect('/');
  } else {
    if (!trimmed) {
      res.redirect(`/${listName}`);
      return;
    }

    List.updateOne(
      { name: listName },
      { $push: { items: item } },
      (err, foundList) => {
        res.redirect(`/${listName}`);
      }
    );
  }
});

app.post('/delete', (req, res) => {
  const checkedItemId = req.body.checkbox;
  const listName = req.body.listName;

  if (listName === 'Today') {
    Item.findByIdAndRemove(checkedItemId, (err) => {
      if (!err) {
        console.log('Succesfully deleted checked item');
        res.redirect('/');
      }
    });
  } else {
    List.findOne({ name: listName }, (err, foundList) => {
      if (!err) {
        foundList.items.pull(checkedItemId);
        foundList.save();
        res.redirect(`/${listName}`);
      }
    });
  }
});

app.get('/about', (req, res) => {
  res.render('about');
});

let port = process.env.PORT;

app.listen(port, () => {
  console.log('Server has started successfully');
});
