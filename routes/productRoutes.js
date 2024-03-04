import { Router } from "express";
import { createProduct, fetchProduct, updateProduct } from "../Controller/ProductController.js";

const router = Router()

router.get("/", fetchProduct)
router.post("/", createProduct)
router.put("/:id", updateProduct)

export default router