const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

mongoose
  .connect("mongodb://localhost/review", { useMongoClient: true })
  .then(() => console.log("Successfully connected to the database"))
  .catch((err) => console.error(err));

const app = express();

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(express.static(path.join(__dirname, "public")));
require("./App/Routes")(app);
app.listen(3000, function () {
  console.log("Server running at port 3000: http://127.0.0.1:3000");
});
