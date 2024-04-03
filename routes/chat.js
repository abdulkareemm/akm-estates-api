import express from "express";
import {
  getChats,
  getChat,
  addChat,
  readChat,
} from "../controller/chat.js";
import { verifyToken } from "../middleware/isAuth.js";

const chatRoute = express.Router();

chatRoute.get("/", verifyToken, getChats);
chatRoute.get("/:id", verifyToken, getChat);
chatRoute.post("/", verifyToken, addChat);
chatRoute.put("/read/:id", verifyToken, readChat);

export default chatRoute;
