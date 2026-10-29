const User = require("../models/user.model");
const catchAsync = require("../utils/catchAsync");

const AppError = require("../utils/appError");

exports.signup = catchAsync(async (req, res, next) => {
  const { username, email, password, confirmPassword } = req.body;

  if (password !== confirmPassword) {
    return next(
      new AppError("password and confirmpassword are not matching", 400),
    );
  }

  const user = new User({
    username,
    email,
    password,
    confirmPassword,
  });

  await user.save();
  res.status(201).json({
    status: "success",
    data: {
      user,
    },
  });
});
