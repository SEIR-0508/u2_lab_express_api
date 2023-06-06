const Router = require('express').Router()
const controller = require('../controllers/actorController')

Router.get('/actors', controller.getAllActors)
Router.get('/actors/:id', controller.getActorById)

module.exports = Router
