const express = require("express");
const dotenv = require("dotenv");
const logger = require("morgan");
const mongoose = require("mongoose");
const helmet = require("helmet");
const ratelimit = require("./middleware/ratelimit");
const cors = require("cors");
const compression = require("compression");
const path = require("path");

const app = express();

app.use(ratelimit());
app.enable("trust proxy");
app.disable("x-powered-by");
app.use(helmet());
app.use(cors());
app.use(compression());

dotenv.config();

const mongodb = process.env.MONGO_URI || "mongodb://localhost:27017/nexmo_sms";
mongoose.Promise = global.Promise;
mongoose
  .connect(mongodb)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => {
    console.log("MongoDB Error: ", err);
    process.exit(1);
  });

app.set("port", process.env.PORT || "3000");

app.use(logger("common"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.resolve(__dirname, "../dist")));

const routes = require("./routes");
app.use(routes);

module.exports = app;
