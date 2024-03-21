const { Router } = require('express')

const usersRouters = require('./users.routes')
const notesRouters = require('./notes.routes')
const tagsRouters = require('./tags.routes')


const routes = Router()

// Server find route 'users' here 
routes.use('/users', usersRouters)
routes.use('/notes', notesRouters)
routes.use('/tags', tagsRouters)


module.exports = routes