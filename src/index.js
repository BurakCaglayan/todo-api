import dotenv from "dotenv";
import express from "express";
import { json } from "body-parser";
import TodoRouter from "./routes/todo";
import { connectDb } from "./db";
import cors from 'cors'

dotenv.config();

const app = express();

app.use(json());
app.use(cors());

app.use("/api/todos", TodoRouter);

app.get("/api/health-check", (req, res) => {
  res.json({
    status: "OK",
  });
});

app.get("*", (req, res) => {
  res.status(404).end("Not Found");
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  connectDb();
  console.log(`Api running on port ${port}`);
});
