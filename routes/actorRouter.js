const Router = require('express').Router()
const controller = require('../controllers/actorController')

Router.get('/', controller.getActors)

module.exports = Router