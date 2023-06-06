const express = require("express");
const Router = express.Router();

const ActorRouter = require("./actorRouter");
const MovieRouter = require("./movieRouter");
const ReviewRouter = require("./reviewRouter");

Router.use("/actors", ActorRouter);
Router.use("/movies", MovieRouter);
Router.use("/reviews", ReviewRouter);

module.exports = Router;
