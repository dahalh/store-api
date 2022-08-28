import ProductSchema from "./Product.schema.js";

export const getProduct = (filter) => {
  return ProductSchema.findOne(filter);
};

export const getAllProducts = () => {
  return ProductSchema.find();
};
