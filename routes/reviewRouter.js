const Router = require("express").Router();
const controller = require("../controllers/reviewController.js");

Router.get("/", controller.getReviews);
Router.get("/sort", controller.sortReviews);
Router.get("/sort/:way", controller.sortReviews);
Router.get("/:id", controller.getReviewById);

module.exports = Router;
