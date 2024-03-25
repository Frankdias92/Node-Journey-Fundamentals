const { Router } = require("express")
const MoviesController = require("../controllers/MoviesController")


const moviesRoutes = Router()

const movieController = new MoviesController()

moviesRoutes.post('/:user_id', movieController.create)
moviesRoutes.get('/:id', movieController.create)


module.exports = moviesRoutes