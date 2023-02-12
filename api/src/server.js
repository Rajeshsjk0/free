const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = require("./app");

dotenv.config({ path: "./src/.env" });

// const DB = process.env.DATABASE.replace(
// 	'<PASSWORD>',
// 	process.env.DATABASE_PASSWORD
// );

const DB = process.env.MONGO_URL;

mongoose.set("strictQuery", false);
mongoose
  .connect(DB)
  .then((con) => {
    console.log("DB Connection sucessfull");
  })
  .catch((err) => {
    console.log(err);
  });

// console.log(process.env);
const port = process.env.port || 5000;

//listening to the port
app.listen(port, () => {
  console.log("Server is up on port " + port + ". Backend is running");
});
