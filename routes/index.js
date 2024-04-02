import express from "express";
import authRoute from "./auth.js";
import postRoute from "./post.js";
// import messageRoute from "./message.js";
import userRoute from "./user.js";

const router = express.Router();


router.use("/auth", authRoute);
router.use("/posts", postRoute);
// router.use("/message", messageRoute);
router.use("/user", userRoute);

export default router;
