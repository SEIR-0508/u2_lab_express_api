const Router = require('express').Router()

const ActorRouter = require('./productRouter')
const MovieRouter = require('./brandRouter')
const ReviewRouter = require('./reviewRouter')


Router.use('/actors', ActorRouter)
Router.use('/movies', MovieRouter)
Router.use('/reviews', ReviewRouter)


module.exports = Router