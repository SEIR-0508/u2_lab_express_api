const { Actors, Movies }= require('../models')

const getAllMovies = async(req,res) => {
    try{
        const movies = await Movies.find()
        return res.status(200).json({ movies })
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const getMovie = async(req,res) => {
    try{
        const { id } = req.params
        const movie = await Movies.findById(id)
        if (movie){
            return res.status(200).json({ movie })
        } else {
            return res.status(400).send('Movie Doesnt Exist')
        }
    } catch (error){
        return res.status(500).send(error.message)
    }
}

module.exports = {
    getAllMovies,
    getMovie
}