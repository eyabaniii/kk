const mongoose = require("mongoose");

//create schema
const schema = mongoose.Schema;

const MovieSchema = new schema({
  Title: {
    type: String,
    required: true,
  },
  Description: {
    type: String,
  },
  PosteUrl: {
    type: String,
    required: true,
  },
  Rate: {
    type: Number,
    required: true,
  },
  Trailer: {
    type: String,
  },
});
//export
module.exports = mongoose.model("MovieModel", MovieSchema);
