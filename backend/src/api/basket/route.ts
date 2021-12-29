import express from 'express'
import UsersController from '../users/controller'


const basket = express.Router()

basket.route('/:id')
.post(UsersController.setBasketApi)

export default basket