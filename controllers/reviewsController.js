const { Actors,Movies,Reviews } = require('../models')

const getAllReviews = async(req,res) => {
    try{
        const reviews = await Reviews.find()
        return res.status(200).json({ reviews })
    } catch (error){
        return res.status(500).send(error.message)
    }  
}

const getReview = async(req,res) => {
    try{
        const { id } = req.params
        const review = await Reviews.findById(id)
        if (review){
            return res.status(200).json({ review })
        } else {
            return res.status(400).send('Review doesnt exist')
        }
    } catch (error){
        return res.status
    }
}

module.exports = {
    getReview,
    getAllReviews
}