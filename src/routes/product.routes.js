import { Router } from "express";
import {
  deleteProduct,
  editProduct,
  getAllProducts,
  getProduct,
  getSalientProduct,
  saveProduct,
} from "../controllers/product.controller.js";
const router = Router();

router.get("/", getAllProducts);
router.post("/saveProduct", saveProduct);
router.put("/editProduct/:id", editProduct);
router.delete("/deleteProduct/:id", deleteProduct);
router.get("/getSalientProduct/", getSalientProduct);
router.get("/getProduct/:id", getProduct);
export default router;
