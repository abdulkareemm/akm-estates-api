import express from "express";
import { login, logout, register } from "../controller/auth.js";

const authRoute = express.Router();
authRoute.post("/register",register)
authRoute.post("/login", login);
authRoute.post("/logout", logout);




export default authRoute;
