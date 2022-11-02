const dbConnect = require("./mongodb");

const getData = async () => {
  let data = await dbConnect();
  data = await data.find().toArray();

};

dbConnect();
getData();
