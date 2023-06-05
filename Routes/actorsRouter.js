const Router = require('express').Router()
const controller = require('../controllers/actorsController.js')


Router.get('/', controller.getActors)

Router.get('/:id', controller.getActorsById)




module.exports = Router