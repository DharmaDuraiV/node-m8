const { Schema, model } = require("mongoose");

const productSchema = new Schema(
  {
    pname: {
      type: String,
      required: [true, "product name is required"],
      minLength: [5, "product name must be minimum 5 characters"],
      maxLength: [50, "product name it can accept upto 50 characters"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "description is required"],
      minLength: [10, "description must be minimum 10 characters"],
      trim: true,
    },
    stockQuantity: {
      type: Number,
      required: [true, "stockQuantity is required"],
      min: [0, "stockQuantity it can be grater than equals to 0"],
    },
    weigth: {
      type: Number,
      required: [true, "weigth is required"],
      min: 250,
    },
    price: {
      type: Number,
      required: [true, "price is required"],
      min: [0, "price must be positive value"],
    },
    discountPrice: {
      type: Number,
      validate: {
        validator: function (val) {
          return val < this.price;
        },
        message: "discount amount must be lesser than the price",
      },
    },
    category: String,
    image: String,
  },
  {
    timestamps: true,
  },
);

const Product = model("products", productSchema);

module.exports = Product;
