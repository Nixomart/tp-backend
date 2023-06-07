import { Router } from "express";
import { deleteTicket, editTicket, getTicket, getTicketsByCategory, listTickets, saveTicket } from "../controllers/ticket.controller.js";

const router = Router()

router.post("/saveTicket", saveTicket)
router.get("/getTickets", listTickets)
router.put("/editTicket/:id", editTicket)
router.delete("/deleteTicket/:id", deleteTicket)
router.get("/getTicket/:id", getTicket)
router.get("/getTicketByCategory/:category", getTicketsByCategory)
export default router