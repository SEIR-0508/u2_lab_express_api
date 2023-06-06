const Router = require('express').Router()
const controller = require('../controllers/reviewController')

Router.get('/', controller.getReviews)

module.exports = Router