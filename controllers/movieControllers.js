const { Movies } = require('../models')
const db = require('../db')


const getMovies = async (req, res) => {
    const allmovies = await Movies.find()
    res.json(allmovies)
}


const newestMovie = async (req, res) => {
    const newmovie = await Movies.find().sort({year_released: -1,})
    console.log(newmovie)
    res.json(newmovie)

}

const oldestMovie = async (req, res) => {
    const oldmovie = await Movies.find().sort({year_released: 1,})
    console.log(oldmovie)
    res.json(oldmovie)

}

const getMovieById = async (req, res) => {
    try{
        const {id} = req.params
        const movie = await Movies.findById(id)
        if (!movie) throw Error(`movie not found ¯\_(ツ)_/¯
        `)
        res.json(movie)
        }catch (e){
            console.log(e)
            res.send(`movie not found ¯\_(ツ)_/¯`)
        }
    }


module.exports = {
    newestMovie,
    oldestMovie,
    getMovieById,
    getMovies
}
