const { Router } = require('express')

const userRouter = require('./users.routes')
const movieRouter = require('./movies.routes')
const tagsRoutes = require('./tags.routes')

const routes = Router()
routes.use('/users', userRouter)
routes.use('/movies', movieRouter)
routes.use('/tags', tagsRoutes)

module.exports = routes