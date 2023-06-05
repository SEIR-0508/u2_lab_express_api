const express = require('express')
const Router = express.Router()
const ActorRoute = require('./actorRoute')
const ReviewRoute = require('./reviewRoute')
const MovieRoute = require('./movieRoute')

Router.use(`/actors`, ActorRoute)
Router.use(`/reviews`, ReviewRoute)
Router.use(`/movies`, MovieRoute)

module.exports = Router