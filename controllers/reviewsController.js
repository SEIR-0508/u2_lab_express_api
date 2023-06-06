const { Reviews, Movies } = require('../models')

const findReviews = async (req, res) => {
    const reviews = await Reviews.find()
    res.json(reviews)
}

const findReviewsById = async (req, res) => {
    try {
        const { id } = req.params
        const review = await Reviews.findById(id)
        if(!review) throw Error('Review not found')
        res.status(200).json(review)
    } catch (e) {
        console.log(e)
        res.status(500).send('The review was not found')
    }
}

const createReview = async (req, res) => {
    try {
        const review = await new Reviews(req.query)
        await review.save()
        const movie = await Movies.findById(review.movie)
        const avg = (movie.rating + review.rating)/2
        const updatedMovie = await Movies.findByIdAndUpdate(movie.id, {rating: `${avg}`})
        if(!review) throw Error ('review not created')
        return res.status(201).json({plant})
    } catch (e) {
        console.log(e)
        res.status(500).send('The review was not found')
    }
}

const updateReview = async (req, res) => {
    try {
        const review = await Reviews.findByIdAndUpdate(req.query.id, {[req.query.whatToUpdate]: req.query.update})
        console.log(req.query.whatToUpdate)
        console.log(review)
        if (req.query.whatToUpdate === "rating") {
            const movie = await Movies.findById(review.movie)
            console.log(movie)
            const avg = (movie.rating + review.rating)/2
            const updateMovie = await Movies.findByIdAndUpdate(movie.id, {rating: `${avg}`})
            console.log(updateMovie)
        }
        if(!review) throw Error('Cannot update review')
        res.status(200).json(review)
    } catch (e) {
        console.log(e)
        res.status(500).send('Unable to update review')
    }
}

const deleteReview = async (req, res) => {
    try {
        const { id } = req.params
        const review = await Reviews.findByIdAndDelete(id)
        if(!review) throw Error('Cannot delete review')
        res.status(200).json(review)
    } catch (e) {
        console.log(e)
        res.status(500).send('review not found')
    }
}

const sortReviews = async (req, res) => {
    const reviews = await Reviews.find().sort({ rating: -1 })
    res.json(reviews)
}

module.exports = {
    findReviews,
    findReviewsById,
    createReview,
    updateReview,
    deleteReview,
    sortReviews
}