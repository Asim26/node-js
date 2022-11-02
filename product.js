const mongoose = require("mongoose");
const productSchema = mongoose.Schema({
  name: String,
  designation: String,
});

module.exports = mongoose.model("mytestcollections", productSchema);
