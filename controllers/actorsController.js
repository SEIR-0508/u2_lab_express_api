const { Actor } = require("../models")

const getActors = async (req, res) => {
  const actors = await Actor.find()
  res.json(actors)
}

const getActorById = async (req, res) => {
  try {
    const id = req.params
    const actor = await Actor.findById(id)
    if (!actor) throw Error("actor not found")
    res.json(actor)
  } catch (e) {
    console.log(e)
    res.send("actor not found")
  }
}

module.exports = {
  getActors,
  getActorById,
}
