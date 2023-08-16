require('dotenv').config();
const express = require('express');
const app = express();
// const pool = require('./db');
const animalRoutes = require('./routes/animalRoutes');

app.use(express.json());

app.use('/', animalRoutes)

const port = process.env.PORT || 3000;
app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${port}`);
});
