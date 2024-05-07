import express from "express";
import { getCart} from "../controller/cart.controller.js";

//Creating a new express router instance 
const router = express.Router();

//defines the POST route 
router.post("/", getCart);

export default router;