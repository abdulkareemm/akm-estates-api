import express from "express";
import { verifyToken } from "../middleware/isAuth.js";
import { addPost, deletePost, getPost, getPosts } from "../controller/post.js";

const postRoute = express.Router();
postRoute.route("/").get(getPosts).post(verifyToken,addPost)
postRoute.route("/:id").get(getPost).delete(verifyToken, deletePost)
export default postRoute;
