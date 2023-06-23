const Router = require("express").Router() //this is from Express
const controller = require("../controllers/moviesController")

//index and show routes for our model
Router.get("/", controller.getMovies)
Router.get("/:id", controller.getMovieById)

//we may not have these routes yet, but this is how it would look with full CRUD on a model
// Router.post('/brands', controller.createBrand)
// Router.put('/brands/:brand_id', controller.updateBrand)
// Router.delete('/brands/:brand_id', controller.deleteBrand)

module.exports = Router
