import dotenv from "dotenv";
import express from "express";
import { json } from "body-parser";
import TodoRouter from "./routes/todo";

dotenv.config();

const app = express();

app.use(json());

app.use("/api/todos", TodoRouter);

app.get("/api/health-check", (req, res) => {
  res.json({
    status: "OK",
  });
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Api running on port ${port}`));
