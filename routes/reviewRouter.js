const Router = require('express').Router()
const controller = require('../controllers/reviewController')

Router.get('/', controller.getReviews)
Router.get('/:id', controller.getReviewById)

module.exports = Router