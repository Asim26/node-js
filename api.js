const express = require("express");
const dbConnect = require("./mongodb");

const path = require("path");
const dotenv = require("dotenv");

const app = express();

dotenv.config({ path: path.join(__dirname, "./.env") });
const { PORT } = process.env;
// console.log(PORT);

app.use(express.json());

app.get("/", async (req, rsp) => {
  let data = await dbConnect();
  data = await data.find().toArray();
  rsp.send(data);
});

app.post("/", async (req, rsp) => {
  let data = await dbConnect();
  let result = await data.insert(req.body);
  rsp.send(req.body);
});

app.put("/", async (req, rsp) => {
  let data = await dbConnect();
  let result = data.updateOne(
    { name: req.body.name },
    {
      $set: req.body,
    }
  );
  rsp.send("updated");
});

app.delete("/:id", (req, rsp) => {
  console.log(req.params.id);
  rsp.send("done");
});

app.listen(PORT);
