import express from "express";
import { getCourse } from "../controller/dance.controller.js";

const router = express.Router();

router.get("/", getCourse);

export default router;