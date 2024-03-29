import express from "express";
import { signup, login, getProfile } from "../controller/userController";

export const userRouter = express.Router();

userRouter.post("/signup", signup);
userRouter.post("/login", login);
userRouter.get("/", getProfile);
