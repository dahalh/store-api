import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import "dotenv/config";
const app = express();

const PORT = process.env.port || 8000;

// middlewares
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

// mongodb connect
import { dbConnect } from "./src/config/dbConfig.js";
dbConnect();

// routers
import productRouter from "./src/routers/productRouter.js";
import categoryRouter from "./src/routers/categoryRouter.js";

app.use("/api/v1/products", productRouter);
app.use("/api/v1/category", categoryRouter);

app.get("/", (req, res) => {
  res.json({
    message: "you have reached the client api",
  });
});

// error handling
app.use((err, req, res, next) => {
  console.log(err);

  res.status(err.status || 500);
  res.json({
    status: "error",
    message: err.message,
  });
});

// bound app with port
app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`server is running on http://localhost:${PORT}`);
});
