const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const globalError = require("./middleware/globalError");
const AppError = require("./utils/appError");

const productRoute = require("./routes/product.route");
const authRoute = require("./routes/auth.route");

const app = express();

console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

//* its cors middleware
app.use(cors());
//* to parse the incoming data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/auth", authRoute);
app.use("/api/v1/products", productRoute);


app.all("/{*any}", (req, res, next) => {
  next(new AppError(`Cannot find ${req.originalUrl} on this server.`, 404));
});

app.use(globalError);

module.exports = app;
