import express from 'express'
import UsersController from './controller'


const users = express.Router()

users.route('/')
.get(UsersController.getUsersApi)
.post(UsersController.createUserApi)

users.route('/:id')
.get(UsersController.getUserByIdApi)

export default users