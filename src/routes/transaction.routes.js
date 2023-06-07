import Router from 'express'
import { addTransaction, getTransactions, getTransactionsByEmail, getTransactionsX } from '../controllers/transaction.controller.js'

const router = Router()

router.get("/getTransactions", getTransactions)
router.post("/addTransaction", addTransaction)
router.get("/getTransactions/:email", getTransactionsByEmail)
router.get("/getTransactions/:origin/:destination", getTransactionsX)
export default router