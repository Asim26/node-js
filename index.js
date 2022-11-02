const mongoose = require("mongoose");

const main = async () => {
  await mongoose.connect("mongodb://localhost:27017/myTestDB");
  //schema
  const myTestCollectionSchema = new mongoose.Schema({
    name: String,
    designation: String,
  });
  //model
  const myTestCollectionModel = mongoose.model(
    "mytestcollections",
    myTestCollectionSchema
  );
  //send data in model
  let data = new myTestCollectionModel({
    name: "asdea",
    designation: "s",
  });
  let result = await data.save();
  console.log(result);
};

main();
