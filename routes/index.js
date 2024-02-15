import { Router } from "express";
import UserRoutes from "./userRoutes.js"
import OrderRoutes from "./orderRoutes.js"
// import PortionRoutes from "./portionRoutes.js"

const router = Router()

router.use("/api/user", UserRoutes)
router.use("/api/order", OrderRoutes)
// router.use("/api/portion", PortionRoutes)

export default router