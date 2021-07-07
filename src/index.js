import dotenv from "dotenv";
import express from "express";

dotenv.config();

const app = express();
app.get("/api/health-check", (req, res) => {
  res.json({
    status: "OK"
  });
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Api running on port ${port}`))