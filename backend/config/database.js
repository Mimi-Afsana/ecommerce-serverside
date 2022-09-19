const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect("mongodb://localhost:27017/playground", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("database connected");
    })
    .catch((err) => {
      console.log("Could not connect", err);
    });
};

module.exports = connectDatabase;
