const mongoose = require("mongoose");

const dotenv = require("dotenv");
const path = require("path");

dotenv.config({ path: path.join(__dirname, "./.env") });
const { MONGODB_URI, PORT } = process.env;

// let url = "mongodb://localhost:27017/myTestDB";

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("Successfully connected to database");
  })
  .catch((error) => {
    console.log("database connection failed. exiting now...");
    console.error(error);
    process.exit(1);
  });
