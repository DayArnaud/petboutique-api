require('dotenv').config();
const express = require('express');
const app = express();
const knex = require('./db');
const cors = require('cors');
const animalRoutes = require('./routes/animalRoutes');

app.use(cors());
app.use(express.json());

app.use('/', animalRoutes);

app.get('/', async (req, res) => {
    return res.json('API está ok!')
})

const port = process.env.PORT || 3000;
app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${port}`);
});
