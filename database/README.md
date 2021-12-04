## Database

### SQL (Structured Query Language)

- MySQL
- PostgreSQL

A sequel database groups data into tables, inflexible, reliable

### NoSQL (Not only Strctured Query Language)

- mongoDB
- redis

NoSQL databases tend to be flashier newer with modern syntax and modern methods, flexible

### How to choose

- If you need to store data that have lots of relationships between each other ⟶ choose SQL
- If you have a website where you have something that's more of a one to many kind of relationship ⟶ NoSQL

### Scalability

this is a reason why you might choose a NoSQL over a SQL  
database can be distribute amongst lots and lots of differnt computers

### difference

- `MySQL`

  - More Mature
  - Table Structure
  - Requires a Schema
  - Great with Relationships
  - Scales Vertically

- `MongoDB`
  - Document Structure
  - More Flexible to Changes
  - Not Great with Complex Relationships
  - Horizontally Scalable

### CRUD

- Create
- Read
- Update
- Destroy

#### CREATE Table and INSERT Data

How to Create Table

```
CREATE DATABASE products (  // products is table name
  id INT NOT NULL,
  name STRING,
  price MONEY,
  PRIMARY KEY (id)
);
```

How to update the Table  
The `INSERT INTO` statement is used to insert new records in a table

```
INSERT INTO products
VALUES (1, 'Pen', 1.20)    // id, name, price
```

```
INSERT INTO products (id, name)
VALUES (2, 'Pencil')
```

#### READ, SELECT, and WHERE

```
SELECT name, price
FROM products;
WHERE id = 1  // condition
```

```
SELECT * FROM products;
```

#### UPDATE Single value and ADD Columns

How to Update a Single Value

```
UPDATE products
SET price = 0.80
WHERE id = 2
```

How to Update by Adding a Column

```
ALTER TABLE products
ADD stock INT   // the column name is stock and the data type is integer
```

#### DELETE

```
DELETE FROM products
WHERE id = 2
```

#### SQL Relationships, Foreign Keys and Inner Joins

```
CREATE TABLE orders (
  id INT NOT NULL,
  order_number INT,
  customer_id INT,
  product_id INT,
  PRIMARY KEY (id),
  FOREIGN KEY (customer_id) REFERENCES customers(id),
  FOREIGN KEY (product_id) REFERENCES products(id)
  )
```

INNER JOIN Syntax

```js
SELECT column_name(s)   // all the fields that you want to join together in a new table
FROM table1
INNER JOIN table2
ON table1.column_name = table2.column_name;
```

In my code 👇🏻

```
SELECT orders.order_number, customers.first_name, customers.last_name, customers.address
FROM orders
INNER JOIN customers
ON orders.customer_id = customers.id
```
