import express from "express";
import { signup, login, logout,verifyEmail,forgotPassword,resetPassword,checkAuth} 
from "../controllers/auth.controller.js";
const authRoutes = express.Router();
import { verifyToken } from "../middleware/verifyToken.js";

authRoutes.get("/check-auth",verifyToken,checkAuth);
authRoutes.post("/signup", signup);
authRoutes.post("/login", login);
authRoutes.post("/logout", logout);
authRoutes.post("/verify-email", verifyEmail);
authRoutes.post("/forgot-password", forgotPassword);
authRoutes.post("/reset-password/:token",resetPassword);
export default authRoutes;
