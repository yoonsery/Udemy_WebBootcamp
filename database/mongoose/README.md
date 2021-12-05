## mongoose

### ODM (Object Document Mapper)

#### How to Start [👀](https://mongoosejs.com/docs/index.html)

```js
// getting-started.js
const mongoose = require('mongoose');

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/fruitsDB');
}

const fruitSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  review: String,
});

const Fruit = mongoose.model('fruit', fruitSchema);
// 1st params: name of the collection and always be string & singular form

const fruit = new Fruit({
  name: 'Apple',
  rating: 7,
  review: 'Delicious!',
});

fruit.save();
```

#### How to insert an array of documents

docs [👀](https://mongoosejs.com/docs/api/model.html)

```js
Fruit.insertMany([kiwi, peach, hallabong], (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Succesfully saved all the fruits to fruitsDB');
  }
});
```

#### example code [👀](https://github.com/yoonsery/study_node/tree/main/18-mongoose)
