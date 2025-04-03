import express from "express";
import dotenv from "dotenv";
import { foodRouter } from "./routes/food";
import { connection } from "./utils/connection";
import { categoryRouter } from "./routes/category";

dotenv.config();

const app = express();

app.use(express.json());

const PORT = 8000;

app.use("/api/v1/foods", foodRouter);
app.use("/api/v1/categories", categoryRouter);

let count = 0;

app.get("/", (req, res) => {
  console.log(req, count++);

  res.send("ok");
});

app.listen(PORT, async () => {
  await connection();
  console.log(`Server is running http://localhost:${PORT}`);
});
