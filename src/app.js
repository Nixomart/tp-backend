import express from 'express'
import productRouter from './routes/product.routes.js'
import transactionRouter from './routes/transaction.routes.js'
import viewerRouter from './routes/viewer.routes.js'
import ticketRouter from './routes/ticket.routes.js'
import bodyParser from 'body-parser'
import cors from 'cors'
const app = express()
/* const currentDir = path.dirname(new URL(import.meta.url).pathname); */
app.use(cors())
app.use(bodyParser.urlencoded({extended: false})); 
app.use(bodyParser.json())
app.use(productRouter)
app.use(transactionRouter)
app.use(viewerRouter)
app.use(ticketRouter)
/* app.use("/public", express.static(path.join(currentDir, "storage/imgs"))); */
export default app;