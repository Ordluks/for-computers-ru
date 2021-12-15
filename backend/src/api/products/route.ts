import express from 'express'
import ProductsController from './controller'


const products = express.Router()

products.route('/')
.get(ProductsController.getProductsApi)
.post(ProductsController.createProductApi)

export default products