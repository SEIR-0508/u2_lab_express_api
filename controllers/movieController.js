const mongoose = require('mongoose') 
const Movie = require('../models/movie')

const getAllMovies = async (req, res) => {
    try{
        const movies = await Movie.find()
        return res.status(200).json({ movies })
    }catch( error) {
        return res.status(500).send(error.message)
    }
}

const getMoviesById = async (req, res) => {
     try{
         const { id } = req.params
         const movie = await Movie.findById(id)
         .populate('actor')
         .populate('reviews')
         if (!movie) throw Error('product not found') 
         res.json(movie)
     }
     catch(e){
        console.log(e)
        res.send('product not found')
     }
}

module.exports ={
    getAllMovies,
    getMoviesById
}