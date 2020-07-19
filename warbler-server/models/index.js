const mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.Promise = Promise;
//mongoose.connect("mongodb://localhost/warbler", {
  //keepAlive: true
//});

//define CONST for connection
const connection ="mongodb://mongo:27017/mongo-test"
const connectDb = () => {
  return mongoose.connect(connection)
}

module.exports = connectDb
module.exports.User = require("./user");
module.exports.Message = require("./message");