import express from "express";
import { getUsers } from "../controller/user.js";

const userRoute = express.Router();
userRoute.get("/", getUsers);

export default userRoute;


