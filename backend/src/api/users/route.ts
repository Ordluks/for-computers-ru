import express from 'express'
import UsersController from './controller'


const users = express.Router()

users.route('/')
.get(UsersController.getUsersApi)
.post(UsersController.createUserApi)

users.route('/id/:id')
.get(UsersController.getUserByIdApi)

users.route('/login')
.get(UsersController.auth)
.post(UsersController.login)

export default users