const express = require('express');
const https = require('https');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

const app = express();

dotenv.config();
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

app.post('/', (req, res) => {
  const query = req.body.cityName;
  const apiKey = process.env.WEATHER_API_KEY;
  const units = 'metric';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${apiKey}&units=${units}`;

  https.get(url, (response) => {
    console.log('statusCode:', response.statusCode);

    response.on('data', (data) => {
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const weatherDescription = weatherData.weather[0].description;
      const icon = weatherData.weather[0].icon;
      const imageURL = `http://openweathermap.org/img/wn/${icon}@2x.png`;

      res.set({ 'Content-Type': 'text/html; charset=utf-8' }); // Can use special characters 💃🏻
      res.write(`<h1>The temperature in ${query} is ${temp}℃ </h1>`);
      res.write(`<p>The weather is currently ${weatherDescription}</p>`);
      res.write(`<img src="${imageURL}" >`);
      res.send();
    });
  });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000!');
});
