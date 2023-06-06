const Router = require("express").Router();
const controller = require("../controllers/movieController.js");

Router.get("/", controller.getMovies);
Router.get("/:id", controller.getMovieById);

module.exports = Router;
