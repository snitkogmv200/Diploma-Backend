import { Router } from "express";
import UserRoutes from "./userRoutes.js"
import OrderRoutes from "./orderRoutes.js"
import WarehouseRoutes from "./warehouseRoutes.js"
import PortionRoutes from "./portionRoutes.js"
import ProductRoutes from "./productRoutes.js"

const router = Router()

router.use("/api/user", UserRoutes)
router.use("/api/order", OrderRoutes)
router.use("/api/warehouse", WarehouseRoutes)
router.use("/api/portion", PortionRoutes)
router.use("/api/product", ProductRoutes)

export default router