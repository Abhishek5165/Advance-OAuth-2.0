import express from 'express';
import { connectDB } from './db/connect.js';
import dotenv from "dotenv";
import authRoutes from './routes/auth.routes.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import path from 'path';

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;
const __dirname = path.resolve();
app.use(cors({credentials:true,origin:"http://localhost:5173"}));

app.use(express.json());  // middleware
app.use(cookieParser());

app.use("/api/auth",authRoutes);

if (process.env.NODE_ENV === "production") {
	app.use(express.static(path.join(__dirname, "/Frontend/dist")));

	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "Frontend", "dist", "index.html"));
	});
}

// Serve static files from the frontend build directory
app.use(express.static(path.join(__dirname, 'Backend/public')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'Backend/public', 'index.html'));
});


app.listen(port,()=>{
    connectDB();
    console.log("Server is running on port",port);
})

console.log("No Error ❤️❤️");