const express = require("express");
const dotenv = require("dotenv");
const logger = require("morgan");
const mongoose = require("mongoose");
const helmet = require("helmet");
const ratelimit = require("./middleware/ratelimit");
const cors = require("cors");
const compression = require("compression");

const app = express();

app.use(ratelimit());
app.enable("trust proxy");
app.disable("x-powered-by");
app.use(helmet());
app.use(cors());
app.use(compression());

const mongodb = process.env.MONGO_URI || "mongodb://localhost:27017/nexmo_sms";
mongoose.Promise = global.Promise;
mongoose
  .connect(mongodb)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => {
    console.log("MongoDB Error: ", err);
    process.exit(1);
  });

dotenv.config();
app.set("port", process.env.PORT || "3000");

app.use(logger("common"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const routes = require("./routes");
app.use(routes);

module.exports = app;
