const mongoose = require("mongoose");

const connectDB = () => {
  try {
      const connect = await mongoose.connect(process.env.MONGO_URI,{
          useNewUrlParser:true,
          useUnifiedTopology: true,
      })
  } catch {
    error;
  }
};

module.exports = connectDB;