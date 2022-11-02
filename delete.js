const dbConnect = require("./mongodb");

const del = async () => {
  let data = await dbConnect();
  let result = await data.deleteOne({ name: "Ahmed" });
  console.log(result);

  if (result?.acknowledged && result?.deletedCount > 0) {
    console.log("record deleted...");
  }
};

del();
