const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/todolistDB');
}

main().catch((err) => console.log(err));

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
  const customListName = req.params.customListName;

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

  if (itemName.trim() === '') {
    res.redirect('/');
    return;
  }

  const item = new Item({
    name: itemName,
  });
  item.save();
  res.redirect('/');
});

app.post('/delete', (req, res) => {
  const checkedItemId = req.body.checkbox;

  Item.findByIdAndRemove(checkedItemId, (err) => {
    if (!err) {
      console.log('Succesfully deleted checked item');
      res.redirect('/');
    }
  });
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
