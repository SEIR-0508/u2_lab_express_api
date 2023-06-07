const db = require('./db')
const Review = require('./models/review');
const Movie = require('./models/movie');

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

async function seedDatabase() {
  try {
    // Get movies from the database
    const movies = await Movie.find().exec();

    // Create reviews
    const review1 = await Review.create({
      score: 8,
      comment: 'Great movie!',
      movie: movies[0]._id
    });

    const review2 = await Review.create({
      score: 7,
      comment: 'Enjoyable watch.',
      movie: movies[1]._id
    });

    const review3 = await Review.create({
      score: 9,
      comment: 'Highly recommended!',
      movie: movies[2]._id
    });

    console.log('Database seeded successfully');
    process.exit(0);
  } catch (err) {
    console.error('Error seeding the database:', err);
    process.exit(1);
  }
}