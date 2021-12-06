const mongoose = require('mongoose');

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/fruitsDB');
}

const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please check your data entry, no name specified!'],
  },
  rating: {
    type: Number,
    min: 1,
    max: 10,
  },
  review: String,
});

const Fruit = mongoose.model('fruit', fruitSchema);
// 1st params: name of the collection and always be string & singular form

const fruit = new Fruit({
  name: 'Apple',
  rating: 7,
  review: 'Delicious!',
});

const kiwi = new Fruit({
  name: 'kiwi',
  rating: 9,
  review: 'Sweeeeet',
});

const peach = new Fruit({
  name: 'peach',
  rating: 10,
  review: 'The best fruit',
});

const hallabong = new Fruit({
  name: 'hallabong',
  rating: 10,
  review: 'Better than mandarin!',
});

// fruit.save();

// 📌 delete all documents from collection

// Fruit.deleteMany((err) => {
//   if (err) {
//     console.log(err);
//   }
// });

// 📌 insert documents to collection

// Fruit.insertMany([kiwi, peach, hallabong], (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('Succesfully saved all the fruits to fruitsDB');
//   }
// });

// 📌 read documents

Fruit.find((err, fruits) => {
  if (err) {
    console.log(err);
  } else {
    // 📌 close the connection
    // mongoose.connection.close();

    fruits.forEach((fruit) => {
      console.log(fruit.name, fruit.id);
    });
  }
});

// 📌 updata data

// Fruit.updateOne(
//   { _id: '61ae22e18d1359358fe86ea3' },
//   { name: 'blueberry' },
//   (err) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log('Succesfully updated the document');
//     }
//   }
// );

// 📌 delete specific documents from the collection

Fruit.deleteOne({ name: 'blueberry' }, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Succesfully deleted!');
  }
});

// challenge

const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

const Person = mongoose.model('person', personSchema);
const person = new Person({
  name: 'John',
  age: 37,
});

person.save();

Person.deleteMany({ name: 'John' }, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Succesfully deleted all!');
  }
});
