import express from "express";

import { getAllProducts } from "../models/product/Product.model.js";

const router = express.Router();

router.get("/", async (req, res, next) => {
  const result = await getAllProducts();
  res.send(result);
  console.log(result);
});

export default router;
