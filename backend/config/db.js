const mongoose = require("mongoose");

const mongodbUrl = "mongodb://localhost:27017/e-comm";

const connectDB = async () => {
  try {
    await mongoose.connect(mongodbUrl);
    console.log("connect to monodb server");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;
