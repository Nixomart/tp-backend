import { Router } from "express";
import { deleteViewer, editViewer, getViewer, listViewers, saveViewer } from "../controllers/viewer.controller.js";

const router = Router()

router.get('/allViewers', listViewers)
router.get('/viewer/:id', getViewer)
router.post("/addViewer", saveViewer)
router.put("/editViewer/:id", editViewer)
router.delete("/deleteViewer/:id", deleteViewer)

export default router;