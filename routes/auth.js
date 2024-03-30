import express from "express";
import { register } from "../controller/auth.js";

const authRoute = express.Router();
authRoute.post("/register",register)


export default authRoute;
