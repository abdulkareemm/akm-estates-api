import express from "express";
import { verifyToken } from "../middleware/isAuth.js";
import { addPost, deletePost, getPosts } from "../controller/post.js";

const postRoute = express.Router();
postRoute.route("/").get(getPosts).post(verifyToken,addPost)
postRoute.delete("/:id", verifyToken, deletePost);
export default postRoute;
