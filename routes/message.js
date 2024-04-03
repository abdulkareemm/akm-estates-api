import express from "express";
import { addMessage } from "../controller/message.js";
import { verifyToken } from "../middleware/isAuth.js";

const messageRoute = express.Router();

messageRoute.post("/:chatId", verifyToken, addMessage);

export default messageRoute;
