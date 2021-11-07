const express = require('express');
const https = require('https');

const app = express();

app.get('/', (req, res) => {
  const url =
    'https://api.openweathermap.org/data/2.5/weather?q=London&appid=727882c6eaab040ebe0ae213b5b5fcaf&units=metric';

  https.get(url, (response) => {
    console.log('statusCode:', response.statusCode);

    response.on('data', (data) => {
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const weatherDescription = weatherData.weather[0].description;
      const icon = weatherData.weather[0].icon;
      const imageURL = `http://openweathermap.org/img/wn/${icon}@2x.png`;

      res.set({ 'Content-Type': 'text/html; charset=utf-8' }); // Can use special characters 💃🏻
      res.write(`<h1>The temperature in London is ${temp}℃ </h1>`);
      res.write(`<p>The weather is currently ${weatherDescription}</p>`);
      res.write(`<img src="${imageURL}" >`);
      res.send();
    });
  });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000!');
});
