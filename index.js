const express = require("express");
require("./config");
const Product = require("./product");
const app = express();

const dotenv = require("dotenv");
const path = require("path");

dotenv.config({ path: path.join(__dirname, "./.env") });
const { MONGODB_URI, PORT } = process.env;

app.use(express.json());

const multer = require("multer");

const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "uploads");
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + "-" + Date.now() + ".jpg");
    },
  }),
}).single("user_file");

app.post("/create", async (req, resp) => {
  let data = new Product(req.body);
  const result = await data.save();
  resp.send(result);
});

app.get("/list", async (req, resp) => {
  let data = await Product.find();
  resp.send(data);
});

app.delete("/delete/:_id", async (req, resp) => {
  console.log(req.params);
  let data = await Product.deleteOne(req.params);
  resp.send(data);
});

app.put("/update/:_id", async (req, resp) => {
  console.log(req.params);
  let data = await Product.updateOne(req.params, { $set: req.body });
  resp.send(data);
});

app.get("/search/:key", async (req, resp) => {
  let data = await Product.find({
    $or: [
      { name: { $regex: req.params.key } },
      { designation: { $regex: req.params.key } },
    ],
  });
  resp.send(data);
});

app.post("/upload", upload, (req, rsp) => {
  rsp.send("file upload");
});

app.listen(PORT);