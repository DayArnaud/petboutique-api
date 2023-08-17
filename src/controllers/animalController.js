const knex = require('../db');

getAllAnimals = async (req, res) => {
    try {
        const result = await knex.select('*').from('animals');
        res.json(result);
    } catch (error) {
        console.log(error.message);
    }
};

createAnimal = async (req, res) => {
    try {
        const { name, specie, breed, age, img } = req.body;
        const newAnimal = await knex('animals').insert({
            name, specie, breed, age, img
        }).returning('*');
        res.json(newAnimal[0]);
    } catch (error) {
        console.log(error.message);
    }
};

updateAnimal = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, specie, breed, age, img } = req.body;
        const updateAnimal = await knex('animals').where({ id }).update({
            name, specie, breed, age, img
        }).returning('*');
        res.json(updateAnimal[0]);
    } catch (error) {
        console.log(error.message);
    }
};

deleteAnimal = async (req, res) => {
    try {
        const { id } = req.params;
        const deleteAnimal = await knex('animals').where({ id }).del().returning('*');
        res.json(deleteAnimal[0]);
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