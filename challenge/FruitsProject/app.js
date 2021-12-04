const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017';
// const uri =
// 'mongodb+srv://<user>:<password>@<cluster-url>?retryWrites=true&writeConcern=majority';

const client = new MongoClient(
  uri, //
  { useUnifiedTopology: true }
);

async function run() {
  try {
    await client.connect();
    console.log('Connected Successfully to server');

    const database = client.db('fruitsDB');
    const fruitsCollection = database.collection('fruits');

    const fruits = [
      {
        name: 'Apple',
        score: 8,
        review: 'Great fruit',
      },
      {
        name: 'Orange',
        score: 6,
        review: 'Kinda sour',
      },
      {
        name: 'Banana',
        score: 9,
        review: 'Great stuff!',
      },
    ];

    const result = await fruitsCollection.insertMany(fruits);
    const resultOfFruits = await fruitsCollection.find();
    console.log(await resultOfFruits.forEach((item) => console.log(item)));
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
