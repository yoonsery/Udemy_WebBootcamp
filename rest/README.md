## What is REST?

`RE`presentational `S`tate `T`ransger

- `client` makes a request to the `server`

  - Through HTTP request (Hypertext Transfer Protocol request)
  - HTTPs : `secure` request. use cryptography and encrypt our request

- if it is successful,
  - server should respond with the results of what it is that client requested
  - server might do one of two things:
    - 1. run some code to work out the result that client needs
    - 2. need to communicate with client's database in order to grab the relevant data

server will have APIs (like a menu, client_customer, server_restaurant)

REST is an (one of) architectural style for designing APIs  
(SOAP, GraphQL, Falcor... but the gold standard for web API is REST)

## How to make API RESTful

1. Use HTTP Request Verbs
2. Use Specific Pattern of Routes/Endpoint URLs

### HTTP Request verbs

- GET
- POST
- PUT | PATCH
- DELETE

Database `CRUD` function : CREATE, READ, UPDATE, DELETE

- `GET` - READ : `app.get((req, res) => { ... })`
- `POST` - CREATE : `app.post((req, res) => { ... })`
- `PUT` | `PATCH` - UPDATE : `app.put((req, res) => { ... })` | `app.patch( ... )`
  - difference between put & patch
  - PUT: update database by sending an entire entry to replace the previouse one
  - PATCH: only send the piece of data that needs to be updated
- `DELETE` - DELETE : `app.delete((req, res) => { ... })`
