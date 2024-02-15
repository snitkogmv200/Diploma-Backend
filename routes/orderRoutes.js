import { Router } from "express";
import { createOrder, fetchOrders, showOrder, deleteOrder } from "../Controller/OrderController.js";

const router = Router()

router.post("/", createOrder)
router.get("/", fetchOrders)
router.get("/:id", showOrder)
router.delete("/:id", deleteOrder)


export default router