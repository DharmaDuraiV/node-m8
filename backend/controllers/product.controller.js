const Product = require("../models/product.model");
const catchAsync = require("../utils/catchAsync");

exports.createProduct = catchAsync(async (req, res, next) => {
  const product = await Product.create(req.body);
  res.status(201).json({
    status: "success",
    data: { product },
  });
});

exports.getProducts = catchAsync(async (req, res, next) => {
  const products = await Product.find();
  res.status(200).json({
    status: "success",
    totalProducts: products.length,
    data: { products },
  });
});

exports.getProduct = catchAsync(async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  res.status(200).json({
    status: "success",
    data: { product },
  });
});
exports.updateProduct = catchAsync(async (req, res, next) => {
  const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    returnDocument: "after",
  });
  res.status(200).json({
    status: "success",
    data: { product },
  });
});

exports.deleteProduct = catchAsync(async (req, res, next) => {
  await Product.findByIdAndDelete(req.params.id);
  res.status(204).json({
    status: "success",
  });
});
