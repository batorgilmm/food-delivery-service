import express from "express";
import dotenv from "dotenv";
import { foodRouter } from "./routes/food";
import { connection } from "./utils/connection";
import { categoryRouter } from "./routes/category";
import { authRouter } from "./routes/auth";

dotenv.config();

const app = express();

app.use(express.json());

const PORT = 8000;

app.use("/api/v1/foods", foodRouter);
app.use("/api/v1/categories", categoryRouter);
app.use("/api/v1/auth", authRouter);

app.get("/", (_req, res) => {
  res.send("ok");
});

app.listen(PORT, async () => {
  await connection();
  console.log(`Server is running http://localhost:${PORT}`);
});
