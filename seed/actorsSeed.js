const db = require("../db")
const { Actor } = require("../models")

db.on("error", console.error.bind(console, "MongoDB connection error:"))

const main = async () => {
  const actors = [
    { name: "Actor1", age: 56, deceased: true },
    { name: "Actor2", age: 23, deceased: false },
    { name: "Actor3", age: 36, deceased: true },
    { name: "Actor4", age: 67, deceased: false },
    { name: "Actor5", age: 12, deceased: false },
    { name: "Actor6", age: 41, deceased: true },
    { name: "Actor7", age: 61, deceased: false },
    { name: "Actor8", age: 13, deceased: true },
    { name: "Actor9", age: 67, deceased: false },
    { name: "Actor10", age: 57, deceased: true },
  ]

  await Actor.deleteMany()
  await Actor.insertMany(actors) // Can be done all at once using insertMany or one by one using save()
  console.log("Created actors!")
}

const run = async () => {
  await main()
  db.close()
}

run()
