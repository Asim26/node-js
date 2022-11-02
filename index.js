const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/myTestDB");
const productSchema = new mongoose.Schema({
  name: String,
  designation: String,
});

const saveInDB = async () => {
  const Product = mongoose.model("mytestcollections", productSchema);
  let data = new Product({
    name: "ABS",
    designation: "sss",
  });
  const result = await data.save();
  console.log(result);
};

const updateInDB = async () => {
  const Product = mongoose.model("mytestcollections", productSchema);
  let data = await Product.updateOne(
    { name: "ABS" },
    {
      $set: { price: 550, name: "XYZ" },
    }
  );
  console.log(data);
};

const deleteInDB = async () => {
  const Product = mongoose.model("mytestcollections", productSchema);
  let data = await Product.deleteOne({ name: "XYZ" });
  console.log(data);
};
const findInDB = async () => {
  const Product = mongoose.model("mytestcollections", productSchema);
  let data = await Product.find({ name: "Asim" });
  console.log(data);
};

// findInDB();
// saveInDB();
// updateInDB();
// deleteInDB();
// findInDB();
