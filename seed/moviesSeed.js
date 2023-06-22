const { Movie, Actor } = require("../models")
const db = require("../db")

db.on("error", console.error.bind(console, "MongoDB connection error:"))

const main = async () => {
  const actors = await Actor.find()
  const movies = [
    {
      title: "Movie1",
      runtime: 90,
      yearReleased: 2020,
      actors: actors[0]._id,
      description: "Lorem ipsum dolor sit amet.",
    },
    {
      title: "Movie2",
      runtime: 60,
      yearReleased: 2023,
      actors: actors[1]._id,
      description: "Consectetur adipiscing elit.",
    },
    {
      title: "Movie3",
      runtime: 97,
      yearReleased: 2010,
      actors: actors[2]._id,
      description: "Sed do eiusmod tempor incididunt.",
    },
    {
      title: "Movie4",
      runtime: 310,
      yearReleased: 2023,
      actors: actors[3]._id,
      description: "Ut labore et dolore magna aliqua.",
    },
    {
      title: "Movie5",
      runtime: 50,
      yearReleased: 2021,
      actors: actors[4]._id,
      description: "Duis aute irure dolor in reprehenderit.",
    },
  ]

  await Movie.deleteMany()
  await Movie.insertMany(movies)
  console.log("Created movies!")
}

const run = async () => {
  await main()
  db.close()
}

run()
