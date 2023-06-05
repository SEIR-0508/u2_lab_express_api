const express = require('express')
const Router = require('express').Router()
const reviewsController = require('../controllers/reviewsController.js')






Router.get('/', reviewsController.getReviews)

Router.get('/:id', reviewsController.getReviewsById)




module.exports = Router