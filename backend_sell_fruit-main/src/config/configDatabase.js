const mongoose = require("mongoose");
const connectDb = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://levietduc2000cb:0986929235QAZqaz.@cluster0.whczhnm.mongodb.net/fruit"
    );
    console.log("Database connect Success");
  } catch (error) {
    console.log("Database connect Failure");
    process.exit(1);
  }
};

const disConnectDb = async () => {
  try {
    await mongoose.connection.close();
    console.log("Database disconnect Success");
  } catch (error) {
    console.log("Database disconnect Failure");
  }
};
module.exports = { connectDb, disConnectDb };
