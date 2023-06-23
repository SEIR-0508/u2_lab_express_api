const express = require("express")
//using this thing called the Router, which is build into express
const Router = express.Router()
//importing our two individual router files
const ActorRouter = require("./actorsRoute")
const MovieRouter = require("./moviesRoute")
const ReviewRouter = require("./reviewsRoute")

//setting up our basic routes
Router.get("/", (req, res) => {
  res.send({ msg: "server running" })
})
Router.use("/actors", ActorRouter)
Router.use("/movies", MovieRouter)
Router.use("/reviews", ReviewRouter)

module.exports = Router
