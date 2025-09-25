const mongoose = require("mongoose");

const connectToDb = async (url) => {
  try {
    await mongoose.connect(url);
    console.log('MongoDB connection successfull');
  }
  catch(err) {
    console.error("Some error occured while connecting to MongoDB:", err.message);
  }
};

module.exports = connectToDb;
