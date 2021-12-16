import express from 'express'
import ProductsController from './controller'


const products = express.Router()

products.route('/')
.get(ProductsController.getProductsApi)
.post(ProductsController.createProductApi)

products.route('/id/:id')
.get(ProductsController.getProductByIdApi)

export default products