const db = require("../db")
const { Review, Movie } = require("../models")

db.on("error", console.error.bind(console, "MongoDB connection error:"))

//movies[Math.floor(Math.random() * movies.length)]._id - creates ""movies[indxeNo] by looking at the length of the "movies" array and using math.floor to round down and math.random to * by array length.

const main = async () => {
  const movies = await Movie.find()
  const reviews = [
    {
      movie: movies[Math.floor(Math.random() * movies.length)]._id,
      rating: 5,
      comment: "Lorem ipsum dolor sit amet.",
    },
    {
      movie: movies[Math.floor(Math.random() * movies.length)]._id,
      rating: 4,
      comment: "Consectetur adipiscing elit.",
    },
    {
      movie: movies[Math.floor(Math.random() * movies.length)]._id,
      rating: 3,
      comment: "Sed do eiusmod tempor incididunt.",
    },
    {
      movie: movies[Math.floor(Math.random() * movies.length)]._id,
      rating: 5,
      comment: "Ut labore et dolore magna aliqua.",
    },
    {
      movie: movies[Math.floor(Math.random() * movies.length)]._id,
      rating: 4,
      comment: "Duis aute irure dolor in reprehenderit.",
    },
    {
      movie: movies[Math.floor(Math.random() * movies.length)]._id,
      rating: 5,
      comment: "Excepteur sint occaecat cupidatat non proident.",
    },
    {
      movie: movies[Math.floor(Math.random() * movies.length)]._id,
      rating: 3,
      comment: "Sunt in culpa qui officia deserunt mollit.",
    },
    {
      movie: movies[Math.floor(Math.random() * movies.length)]._id,
      rating: 4,
      comment: "Anim id est laborum.",
    },
    {
      movie: movies[Math.floor(Math.random() * movies.length)]._id,
      rating: 5,
      comment: "Lorem ipsum dolor sit amet.",
    },
    {
      movie: movies[Math.floor(Math.random() * movies.length)]._id,
      rating: 4,
      comment: "Consectetur adipiscing elit.",
    },
  ]

  await Review.deleteMany()
  await Review.insertMany(reviews)
  console.log("Created reviews!")
}

const run = async () => {
  await main()
  db.close()
}

run()
