'use strict';

const express = require('express');
require('dotenv').config();

const app = express();

const build = `${__dirname}/build`;

app.use(express.static(build));

app.get('*', (request, response) => {
  response.sendFile(`${build}/index.html`);
});

app.listen(process.env.PORT, () => {
  console.log('___SERVER IS UP___', process.env.PORT);
});
