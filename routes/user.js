import express from "express";
import { getUsers, profilePosts, savePost, updateUser } from "../controller/user.js";
import {verifyToken} from "../middleware/isAuth.js"

const userRoute = express.Router();
userRoute.get("/", getUsers);
userRoute.put("/:id", verifyToken, updateUser);
userRoute.post("/save", verifyToken, savePost);
userRoute.get("/profilePosts", verifyToken, profilePosts);

export default userRoute;


