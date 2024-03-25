const { Router } = require('express')

const userRouter = require('./users.routes')
const movieRouter = require('./movies.routes')

const routes = Router()
routes.use('/users', userRouter)
routes.use('/movies', movieRouter)

module.exports = routes