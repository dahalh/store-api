import CategorySchema from "./Category.schema.js";

export const getACategory = (filter) => {
  return CategorySchema.findOne(filter);
};

export const getAllCategories = () => {
  return CategorySchema.find();
};

export const getCategories = (filter) => {
  return CategorySchema.find(filter);
};
