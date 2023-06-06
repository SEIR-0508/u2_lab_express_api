const { Review } = require('../models/index');

const getAllReviews = async (req, res) => {
    try {
        const reviews = await Review.find()
        return res.status(200).json({ reviews })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getReview = async (req, res) => {
    try {
        const { id } = req.params;
        const review = await Review.findById(id)
        if (review) {
            return res.status(200).json({ review });
        }
        return res.status(404).send('Review with the specified ID does not exists');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = {
    getAllReviews,
    getReview
}