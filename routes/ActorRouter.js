const Router = require('express').Router()
const controller = require('../controllers/actorController.js')

Router.get('/', controller.getAllActors)
Router.get('/:id', controller.getActorsById)

module.exports = Router