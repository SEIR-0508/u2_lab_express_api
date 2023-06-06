const express = require('express')
const Router = express.Router()
const controller = require('../controllers/reviewController')

Router.get('/reviews', controller.getAllReviews)
Router.get('/reviews/:id', controller.getReviewByID)


module.exports = Router