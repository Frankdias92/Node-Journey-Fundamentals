const { Router } = require('express')


const UsersController = require('../controllers/UsersController')
const ensureAuthenticated = require('../middlewares/ensureAuthenticated')


const usersRouters = Router()

const usersController = new UsersController()

usersRouters.post('/', usersController.create)
usersRouters.put('/', ensureAuthenticated, usersController.updata)


module.exports = usersRouters

