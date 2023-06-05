const { Review } = require('../models')
const reviewSchema = require('../models/reviews')

const getReviews = async (req,res) => {
    const reviews = await Review.find({})
    res.json(reviews)
}

const getReviewById = async (req,res) => {
    try{
        const { id } = req.params
        const review = await Review.findById(id)
        if(!review) throw Error('review not found')
        res.json(review)
        }catch (e){
            console.log(e)
            res.send('review not found')
        }
    }

module.exports = {
    getReviews,
    getReviewById
}