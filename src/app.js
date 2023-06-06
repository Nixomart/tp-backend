import express from 'express'
import productRouter from './routes/product.routes.js'
const app = express()

/* app.use(express.urlencoded({extended: false})) */
app.use(express.json())
app.use(productRouter)


export default app;