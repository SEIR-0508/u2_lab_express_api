const { Review } = require('../models')
//const { get } = require('mongoose')

const getAllReviews = async (req, res) => {
    try {
        const reviews = await Review.find()
        if(!reviews) res.status(500).json('cannot find reviews')
        res.status(200).json({reviews})
    } catch(e) {
        res.json(e.message)
    }

}

const getReviewByID = async (req, res) => {
    try {
        const { id } = req.params
        const review = await Review.findById(id)
        if(!review) res.status(500).json('connect find review')
        res.status(200).json({review})
    } catch(e) {
        res.json(e.message)
    }
}




module.exports = {
    getAllReviews,
    getReviewByID
}