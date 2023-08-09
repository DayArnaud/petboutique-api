const express = require('express');
const router = express.Router();
const animalController = require('../controllers/animalController');

router.get('/animals', animalController.getAllAnimals);
router.post('/animals', animalController.createAnimal);
router.put('/animals/:id', animalController.updateAnimal);
router.delete('/animals/:id', animalController.deleteAnimal);

module.exports = router;