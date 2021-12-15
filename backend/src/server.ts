import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import users from './api/users/route'
import products from './api/products/route'


const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser({limit: '50mb'}))
app.use(bodyParser.json())


app.use('/api/v1/users', users)
app.use('/api/v1/products', products)

app.get('*', (_req, res) => {
	res.send('Test')
})

export default app
