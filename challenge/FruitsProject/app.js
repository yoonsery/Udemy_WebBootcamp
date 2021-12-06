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

// 📌 insert documents to collection1

// Fruit.insertMany([kiwi, peach, hallabong], (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('Succesfully saved all the fruits to fruitsDB');
//   }
// });

Fruit.find((err, fruits) => {
  if (err) {
    console.log(err);
  } else {
    // 📌 close the connection
    mongoose.connection.close();

    fruits.forEach((fruit) => {
      console.log(fruit.name);
    });
  }
});
