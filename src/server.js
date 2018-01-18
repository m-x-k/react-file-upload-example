const express = require('express');
const config = require('./config.js');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index', {});
});

app.listen(config.port, function listenHandler() {
  console.log(`Running on port ${config.port}`);
});
