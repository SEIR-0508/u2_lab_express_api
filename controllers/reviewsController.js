const { Review } = require('../models')
const reviewSchema = require('../models/review.js')

// get all reviews
const getAllReviews = async (req, res) => {
    try {
        const reviews = await Review.find({})
        return res.status(200).json({ reviews })
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

// get one review by id; incl response for invalid review id
const getReviewById = async (req, res) => {
    try {
        const { id } = req.params
        const review = await Review.findById(id)
        if (review) {
            return res.status(200).json({ review })
        }
        return res.status(404).send('Review with that ID does not exist')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}
// sort reviews by date
const reviewSort = async (req, res) => {
    const sortOrder = `${req.query.order}`
    if (sortOrder == 'asc') {
        const sortAsc = await Review.find({}).sort({ date: 1 })
        return res.status(200).json({ sortAsc })
    } else if (sortOrder === 'desc' || sortOrder === 'Desc' || sortOrder === 'DESC') {
        const sortDesc = await Review.find({}).sort({ date: -1 })
        return res.status(200).json({ sortDesc })
    } else {
        return res.status(404).send(`Path not found`)
    }
}

module.exports = {
    getAllReviews,
    getReviewById,
    reviewSort
}