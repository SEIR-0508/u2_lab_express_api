const Router = require('express').Router()
const controller = require('../controllers/actorsController')

Router.get('/', controller.findActors)
Router.get('/:id', controller.findActorsById)
Router.post('/', controller.createActor)
Router.put('/', controller.updateActorsById) // use id=""&whatToUpdate=""&update=""
Router.delete('/:id', controller.deleteActor)

module.exports = Router