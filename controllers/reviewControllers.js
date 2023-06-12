const { Reviews } = require('../models')
const db = require('../db')


const getReviews = async (req, res) => {
    const allReviews = await Reviews.find()
    res.json(allReviews)
}



const reviewAssend = async (req, res) => {
    const reviews = await Reviews.find({}).sort({review: 1,})
    console.log (reviews)
    res.json(reviews)
}


const reviewDecend = async (req,res) => {
    const reviews = await Reviews.find({}).sort({review: -1})
    console.log (reviews)
    res.json(reviews)

}


const getReviewById = async (req, res) => {
    try{
        const {id} = req.params
        const review = await Reviews.findById(id)
        if (!review) throw Error(`review not found ¯\_(ツ)_/¯
        `)
        res.json(review)
        }catch (e){
            console.log(e)
            res.send(`review not found ¯\_(ツ)_/¯`)
        }
    }


module.exports = {
    reviewAssend,
    reviewDecend,
    getReviewById,
    getReviews
}