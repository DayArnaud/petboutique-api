const express = require('express');
const app = express();
const pool = require('./db');
const animalRoutes = require('./routes/animalRoutes');

app.use(express.json());

app.use('/', animalRoutes)

app.listen(3000);
