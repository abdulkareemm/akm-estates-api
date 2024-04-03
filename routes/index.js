import express from "express";
import authRoute from "./auth.js";
import postRoute from "./post.js";
import userRoute from "./user.js";
import chatRoute from "./chat.js";

const router = express.Router();


router.use("/auth", authRoute);
router.use("/posts", postRoute);
router.use("/chats", chatRoute);
router.use("/user", userRoute);

export default router;
