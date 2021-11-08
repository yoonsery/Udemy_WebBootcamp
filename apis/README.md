## APIs

#### Application Programming Interfaces

An API is a set of commands, functions, protocols and objects  
that programmers can use to `create software` or `interact with an external system`.

- Endpoint
- Paths
- Parameters
- Authentication

APIs provide multifple formats

- `JSON` : JavaScript object notation
- `XML` : extensible markup language
- `HTML`

JSON is currently the most favoured format. Because it's much lighter weight than the other two,  
Also it's very easy to turn back into a javascript object

### HTTP response status codes

- `100 ~ 199` : Informational responses
- `200 ~ 299` : Successful responses
- `300 ~ 399` : Redirects
- `400 ~ 499` : Client errors
- `500 ~ 599` : Server errors

## Note

1. To use special characters add 👇🏻 code ([link 👀](https://github.com/yoonsery/udemy-bootcamp/commit/08b221f0b09ec41489498047642ceee098a3b770))  
   `res.set({ 'Content-Type': 'text/html; charset=utf-8' });`

2. To hide API Key for security reason, install & use `dotenv` ([link 👀](https://github.com/yoonsery/udemy-bootcamp/commit/51e6657ad5002315aa348ff1366eac5e45d0dfe4))

   ```js
   // import
   const dotenv = require('dotenv');
   dotenv.config();

   // when you use
   const apiKey = process.env.WEATHER_API_KEY;
   ```
