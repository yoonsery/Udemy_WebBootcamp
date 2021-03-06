## MongoDB

### How to [install](https://docs.mongodb.com/v5.0/installation/)

- Cloud: MongoDB Atlas
- Servers
- Tools

### Links

- [MongoDB CRUD Operations](https://docs.mongodb.com/manual/crud/)
- [Query and Projection Operators](https://docs.mongodb.com/manual/reference/operator/query/)

#### To Run MongoDB

`brew services start mongodb-community@5.0`

#### To Stop MongoDB

`brew services stop mongodb-community@5.0`

### Create

- `use <db_name>` : set current database
- `db.products.insertOne({_id: 1, name: 'Pen', price: 1.20})`

### Reading & Queries

- `db.products.find()`
- `db.products.find({name: 'Pen'})` : Can read specific documents inside my collection or inside my database through the use of a specific query
- `db.products.find({price: {$gt: 1}})` : find great than 1 at price collection only
- `db.products.find({_id: 1}, {name: 1, _id: 0})`: find id 1 with name but without id

### Update

`db.products.updateOne({_id: 1}, {$set: {stock: 32}})`

### Delete

- `db.products.deleteOne({_id: 2})`
- `db.fruits.deleteMany({ })`

### Relationships in MongoDB

```
db.products.insertOne(
  {
    _id: 3,
    name: "Rubber",
    price: 1.30,
    stock: 43,
    reviews: [
      {
        authorName: "Sally",
        rating: 5,
        review: "Best rubber ever!"
      },
      {
        authorName: "John",
        rating: 5,
        review: "Awesome rubber!"
      }
    ]
  }
)
```

## MongoDB with Node.js

1. Use MongoDB native driver
2. Use ODM (Object Document Mapper) that's called mongoose

### How to use MongoDB native driver

[docs](https://docs.mongodb.com/drivers/node/current/quick-start/)

create a project directory ⟶ `npm init` ⟶ `npm i mongodb`

## How to Setup MongoDB atlas

Sign up and make cluster then go to the `database access`, set the name and password  
Also set `Atlas admin`from the Database User Privileges

At network access, click the allow `access from anywhere`

When Cluster is ready, click `connect`, `connect with mongoshell`

#### follow the instructions

paste command line at the terminal `brew install mongosh` and  
`mongosh "mongodb+srv://cluster0.puco5.mongodb.net/myFirstDatabase" --username <username>`

Type in mongo commands  
`show dbs`

Create Database  
Go to the collection section from cluster, create a new database  
click `insert document` and set the database name, collection name

Go to the Mongo shell  
`show dbs`, `use <databaseName>`, `show collections`, `db.<collectionName>.find()`

#### Connect to MongoDB cluster

cluster > overview > `connect your application`  
copy `mongodb+srv://<username>:<password>@cluster0.puco5.mongodb.net/<databaseName>`  
go to the `app.js`, replace `mongoose.connect('mongodb://localhost:27017/<databaseName>` with 👆🏻
