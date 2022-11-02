const dbConnect = require("./mongodb");

const updateData = async () => {
  let data = await dbConnect();
  let result = await data.updateOne(
    { name: "ABC" },
    {
      $set: { name: "ABCB" },
    }
  );
  //   console.log(result);
  if (result.acknowledged) {
    console.log("record updated...");
  }
};

updateData();
