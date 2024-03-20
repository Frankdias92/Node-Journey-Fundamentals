const { Router } = require('express')

const usersRouters = require('./users.routes')


const routes = Router()



// Server find route 'users' here 
routes.use('/users', usersRouters)

module.exports = routes