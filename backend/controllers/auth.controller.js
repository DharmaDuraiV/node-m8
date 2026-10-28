const User = require("../models/user.model");
const catchAsync = require("../utils/catchAsync");

exports.signup = catchAsync(async (req, res, next) => {
  const { username, email, password, confirmPassword } = req.body;

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
