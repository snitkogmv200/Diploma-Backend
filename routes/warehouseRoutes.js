import { Router } from "express";
import { createWarehouse, deleteWarehouse, fetchWarehouse, updateWarehouse } from "../Controller/WarehouseController.js";

const router = Router()

router.get("/", fetchWarehouse)
router.post("/", createWarehouse)
router.delete("/:id", deleteWarehouse)
router.put("/:id", updateWarehouse)

export default router