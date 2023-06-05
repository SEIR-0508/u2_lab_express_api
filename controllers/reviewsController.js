const { Reviews } = require('../models')


const getReviews = async (req, res)=> {
    const reviews = await Reviews.find({})
    res.json(reviews)
}

const getReviewsById = async (req,res) => {
    try{
    const { id } = req.params
    const reviews = await Reviews.findById(id)
    if(!reviews) throw Error('reviews not found')
    res.json(reviews)
    }catch (e){
        console.log(e)
        res.send('reviews not found')
    }
}

module.exports = {
    getReviews,
    getReviewsById
}
