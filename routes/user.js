import express from "express";
import { getUsers, updateUser } from "../controller/user.js";
import {verifyToken} from "../middleware/isAuth.js"

const userRoute = express.Router();
userRoute.get("/", getUsers);
userRoute.put("/:id", verifyToken, updateUser);

export default userRoute;


