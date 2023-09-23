require('dotenv').config();

const express = require('express');
const app = express();
const port = 3000;

const axios = require('axios');

const API_KEY = process.env.NASA_API_KEY;

// Set view template engine
app.set('view engine', 'ejs');

app.use('/static', express.static('public'));

app.get('/', (req, res) => {
  axios
    .get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
    .then((response) => {
      res.render('home.ejs', { data: response.data });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send('There was an error fetching the data.');
    });
});

app.listen(port, () => console.log(`App listening on port ${port}!`));
