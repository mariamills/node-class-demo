const express = require('express');
const app = express();
const port = 3000;

// Set view template engine
app.set('view engine', 'ejs');

app.use('/static', express.static('public'));

app.get('/', (req, res) => res.render('home.ejs'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
