const express = require(`express`)
const Router = express.Router()
const controller = require(`../controllers/actorController`)

Router.get(`/`, controller.getActors)
Router.get(`/:id`, controller.getActorById)

module.exports = Router