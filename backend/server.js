const app = require("./app");
const connectDB = require("./config/db");

const port = 3000;

connectDB();

app.listen(port, "localhost", (err) => {
  if (err) throw err;
  console.log(`server is running http://localhost:${port}`);
});
