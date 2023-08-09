const pool = require('../db');

getAllAnimals = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM animals');
        res.json(result);
    } catch (error) {
        console.log(error.message);
    }
};

createAnimal = async (req, res) => {
    try {
        const { name, specie, breed, age, img } = req.body;
        const newAnimal = await pool.query(
            'INSERT INTO animals (name, specie, breed, age, img) VALUES ($1, $2, $3, $4, $5) RETURNING *',
            [name, specie, breed, age, img]
        );
        res.json(newAnimal.rows[0]);
    } catch (error) {
        console.log(error.message);
    }
};

updateAnimal = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, specie, breed, age, img } = req.body;
        const updateAnimal = await pool.query(
            'UPDATE animals SET name = $1, specie = $2, breed = $3, age = $4, img = $5 WHERE id = $6 RETURNING *',
            [name, specie, breed, age, img, id]
        );
        res.json(updateAnimal.rows[0]);
    } catch (error) {
        console.log(error.message);
    }
};


deleteAnimal = async (req, res) => {
    try {
        const { id } = req.params;
        const deleteAnimal = await pool.query(
            'DELETE FROM animals WHERE id = $1 RETURNING *',
            [id]
        );
        res.json(deleteAnimal.rows[0]);
    } catch (error) {
        console.log(error.message);
    }
};

module.exports = {
    getAllAnimals,
    createAnimal,
    updateAnimal,
    deleteAnimal
}