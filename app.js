const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.use('/static', express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.send('Hello world');
});

app.get('/package/:id', (req, res) => {
  res.send('Hello world');
});

app.get('/new', (req, res) => {
  res.send('Hello world');
});

app.get('/checkout', (req, res) => {
  res.send('Hello world');
});

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
