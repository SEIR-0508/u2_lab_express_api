const db = require('../db')
const Review = require('../models/review');
const Movie = require('../models/movie');

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
 
    // Get moviesArray from the database
    const moviesArray = await Movie.find()

    // Create reviews
    const review1 = await Review.create({
      score: 8,
      comment: 'Great movie!',
      movie: moviesArray[0]._id
    })
    await review1.save()

    const review2 = await Review.create({
      score: 7,
      comment: 'Enjoyable watch.',
      movie: moviesArray[1]._id
    })
    await review2.save()

    const review3 = await Review.create({
      score: 9,
      comment: 'Highly recommended!',
      movie: moviesArray[2]._id
    })
    await review3.save()

    const review4 = await Review.create({
      score: 7,
      comment: 'Good storyline.',
      movie: moviesArray[4]._id
    })
    await review4.save()

    const review5 = await Review.create({
      score: 6,
      comment: 'Average movie.',
      movie: moviesArray[4]._id
    })
    await review5.save()

}

const run = async () => {
  await main() 
  db.close()
}

run()
