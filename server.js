'use strict';

const express = require('express');

// Constant
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.send('Run nodejs on Accordion.\n');
});

app.get('/helloword', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.send('Helloworld.\n');
});



app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
