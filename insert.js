const dbConnect = require("./mongodb");

const insert = async () => {
  const db = await dbConnect();
  const result = await db.insert([
    {
      name: "xyz",
      designation: "abc",
    },
    {
      name: "xsz",
      designation: "abc",
    },
  ]);

  //   console.log(result);
  if (result.acknowledged) {
    console.log("data inserted");
  }
};

insert();
