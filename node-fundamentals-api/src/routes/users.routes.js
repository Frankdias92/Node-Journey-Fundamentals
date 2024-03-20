const { Router } = require('express')
const usersRouters = Router()


const UsersController = require('../controllers/UsersController')


const usersController = new UsersController()

usersRouters.post('/', usersController.create)
usersRouters.put('/:id', usersController.updata)


module.exports = usersRouters