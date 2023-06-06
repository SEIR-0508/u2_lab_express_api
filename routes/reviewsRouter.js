const Router = require('express').Router()
const controller = require('../controllers/reviewsController')

Router.get('/', controller.findReviews)
Router.get('/:id', controller.findReviewsById)
Router.post('/', controller.createReview)
Router.put('/', controller.updateReview) // use id=""&whatToUpdate=""&update=""
Router.delete('/:id', controller.deleteReview)
Router.get('/review/sort/', controller.sortReviews)

module.exports = Router