const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL, {
      useNewUrLParser: true
    });
    console.log(`Mongodb connect to: ${conn.connection.host}`)
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
