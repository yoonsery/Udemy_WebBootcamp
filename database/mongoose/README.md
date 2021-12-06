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

#### How to read from the database with Mongoose

```js
Fruit.find((err, fruits) => {
  if (err) {
    console.log(err);
  } else {
    fruits.forEach((fruit) => {
      console.log(fruit.name);
    });
  }
});
```

#### Validation [👀](https://mongoosejs.com/docs/validation.html#built-in-validators)

```js
const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please check your data entry, no name specified!'], // optionally specify a message
  }, // failsafe, when there's no name, console show us 2nd params message
  rating: {
    type: Number,
    min: 1,
    max: 10,
  },
  review: String,
});
```

#### How to update and delete data

Update

```js
Fruit.updateOne(
  { _id: '61ae22e18d1359358fe86ea3' },
  { name: 'blueberry' },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Succesfully updated the document');
    }
  }
);
```

Delete

```js
// deleteOne
Fruit.deleteOne({ name: 'blueberry' }, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Succesfully deleted!');
  }
});

// deleteMany
Person.deleteMany({ name: 'John' }, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Succesfully deleted all!');
  }
});
```
