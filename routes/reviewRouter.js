const express  = require('express')
const Router = express.Router()
const reviewController = require('../controllers/reviewController.js')

Router.get('/', reviewController.getReviews)

Router.get('/:id', reviewController.getReviewById)

module.exports = Router
