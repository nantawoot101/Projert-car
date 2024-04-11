const express = require('express')
const router = express.Router()
const carController = require('../controllers/car-controller')


router.get('/', carController.getAllCar)
router.get('/:id',carController.getCarById)
router.post('/add',carController.createCar)
router.put('/:id', carController.updateCar) 
router.delete('/:id', carController.deleteCar) 


module.exports = router