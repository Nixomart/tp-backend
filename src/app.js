import express from 'express'
import productRouter from './routes/product.routes.js'
import transactionRouter from './routes/transaction.routes.js'
import viewerRouter from './routes/viewer.routes.js'
import ticketRouter from './routes/ticket.routes.js'
const app = express()

/* app.use(express.urlencoded({extended: false})) */
app.use(express.json())
app.use(productRouter)
app.use(transactionRouter)
app.use(viewerRouter)
app.use(ticketRouter)
export default app;