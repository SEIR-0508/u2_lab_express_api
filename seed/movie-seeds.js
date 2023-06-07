const db = require('../db')
const Movie = require('../models/movie');

db.on('error', console.error.bind(console, 'MongoDB connection error:'))


const main = async () => {

    const movie1 = await Movie.create({
      title: 'Movie 1',
      runtime: 120,
      rating: 8,
      yearReleased: 2020,
      description: 'Description of Movie 1'
    })
    await movie1.save()

    const movie2 = await Movie.create({
      title: 'Movie 2',
      runtime: 150,
      rating: 7,
      yearReleased: 2019,
      description: 'Description of Movie 2'
    })
   await movie2.save()

    const movie3 = await Movie.create({
      title: 'Movie 3',
      runtime: 110,
      rating: 9,
      yearReleased: 2021,
      description: 'Description of Movie 3'
    })
    await movie3.save()

    const movie4 = await Movie.create({
      title: 'Movie 4',
      runtime: 130,
      rating: 6,
      yearReleased: 2021,
      description: 'Description of Movie 4'
    })
    await movie4.save()

    const movie5 = await Movie.create({
      title: 'Movie 5',
      runtime: 90,
      rating: 5,
      yearReleased: 2021,
      description: 'Description of Movie 5'
    })
    await movie5.save()
}



const run = async () => {
  await main() 
  db.close()
}

run()



    
 

