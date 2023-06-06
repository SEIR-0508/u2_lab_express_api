const Router = require("express").Router();
const controller = require("../controllers/actorController.js");

Router.get("/", controller.getActors);
Router.get("/:id", controller.getActorById);

module.exports = Router;
