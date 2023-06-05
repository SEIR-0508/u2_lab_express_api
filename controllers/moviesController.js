const { Movies } = require('../models')


const getMovies = async (req, res)=> {
    const movies = await Movies.find({})
    res.json(movies)
}

const getMoviesById = async (req,res) => {
    try{
    const { id } = req.params
    const movies = await Movies.findById(id)
    if(!movies) throw Error('movies not found')
    res.json(movies)
    }catch (e){
        console.log(e)
        res.send('movies not found')
    }
}

module.exports = {
    getMovies,
    getMoviesById
}
