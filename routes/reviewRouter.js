const Router = require('express').Router()
const reviewController = require('../controllers/reviews-controller.js')

Router.get('/', reviewController.getReviews)

Router.get('/:id', reviewController.getReviewById)

module.exports = Router