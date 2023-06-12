const Router = require('express').Router()
const controller = require('../controllers/reviewControllers.js')

Router.get('/reviews', controller.getReviews)

Router.get('/reviews/:id', controller.getReviewById)

module.exports = Router 