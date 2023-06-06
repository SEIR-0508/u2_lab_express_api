const express = require('express')
const router = express.Router()
const controller = require('../controllers/actorsController')

router.get('/', controller.getAllActors)
router.get('/:id', controller.getActor)

module.exports = router