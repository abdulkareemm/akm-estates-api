import express from "express";
import { verifyToken } from "../middleware/isAuth.js";
import { addPost, getPosts } from "../controller/post.js";

const postRoute = express.Router();
postRoute.route("/").get(getPosts).post(verifyToken,addPost)

export default postRoute;
