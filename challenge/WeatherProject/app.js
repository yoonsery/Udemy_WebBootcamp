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
      console.log(temp);
      console.log(weatherDescription);
    });
  });

  res.send('Server is up and running');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000!');
});
