const {Reviews} = require('../models')

const getReviews = async (req, res) => {
    const reviews = await Reviews.find()
    console.log(reviews)
    res.json(reviews)
}


module.exports = {
    getReviews
}