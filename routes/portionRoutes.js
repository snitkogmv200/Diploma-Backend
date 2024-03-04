import { Router } from "express";
import { fetchPortion } from "../Controller/PortionController.js";

const router = Router()

router.get("/:id", fetchPortion)


export default router