const db = require('../db')
const Actor = require('../models/actor.js')
const Movie = require('../models/movie')


db.on('error', console.error.bind(console, 'MongoDB connection error:'))


const main = async () => {
    const moviesArray = await Movie.find()

    const actor1 = await new Actor({
        name: 'Samuel L. Jackson',
        age: 74,
        alive: true,
        movies: [moviesArray[Math.floor(Math.random() * moviesArray.length)]]
    })
      await actor1.save()

    const actor2 = await new Actor({
        name: 'Leonardo DiCaprio',
        age: 48,
        alive: true,
        movies: [moviesArray[Math.floor(Math.random() * moviesArray.length)]]
    })
      await actor2.save()
    
    const actor3 = await new Actor({
        name: 'Denzel Washington',
        age: 68,
        alive: true,
        movies: [moviesArray[Math.floor(Math.random() * moviesArray.length)]]
    }) 
      await actor3.save()

    const actor4 = await new Actor({
        name: 'Chris Pratt',
        age: 43,
        alive: true,
        movies: [moviesArray[Math.floor(Math.random() * moviesArray.length)]]
    }) 
      await actor4.save()

    const actor5 = await new Actor({
        name: 'Ryan Reynolds',
        age: 46,
        alive: true,
        movies: [moviesArray[Math.floor(Math.random() * moviesArray.length)]]
    }) 
      await actor5.save()
}



const run = async () => {
    await main() 
    db.close()
}

  run()

  