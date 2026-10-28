const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  username: {
    type: String,
    required: [true, "username is mandatory"],
    trim: true,
    minLength: [2, "username must be minimum 2 characters"],
    lowercase: true,
  },
  email: {
    type: String,
    required: [true, "email is mandatory"],
    trim: true,
    lowercase: true,
    unique: true,
  },
  password: {
    type: String,
    required: [true, "password is mandatory"],
    trim: true,
    minLength: [8, "password it should accept minimum 8 characters"],
    match: [
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.",
    ],
  },
  confirmPassword: {
    type: String,
    required: [true, "confirmPassword is mandatory"],
    trim: true,
    validate: {
      validator: function (confirmPassword) {
        return confirmPassword === this.password;
      },
      message: "password and confirmPassword both are not same",
    },
  },
  profile: {
    type: String,
    default: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
  },
});

const User = model("Users", userSchema);

module.exports = User;
