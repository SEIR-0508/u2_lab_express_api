const Router = require('express').Router()
const controller = require('../controllers/actorControllers.js')

// list route - an indes of all Actors
Router.get('/actors', controller.getActors)
// show route - displaying individual Actoors
Router.get('/actors/:id', controller.getActorById)


module.exports = Router 
