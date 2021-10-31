//////////////////////////////////////////////
// Import Dependencies
//////////////////////////////////////////////
const mongoose = require("./connection");

////////////////////////////////////////////////
// Our Models
////////////////////////////////////////////////
// pull schema and model from mongoose
const { Schema, model } = mongoose;

// make song schema
const songSchema = new Schema({
  name: {type: String, required: true},
  URL: {type: String, required: true},
  artist: {type: String, required: true},
  desc: String,
  img: String,
});

// make song model
const Song = model("Song", songSchema);

///////////////////////////////////////////////////
// Export Model
///////////////////////////////////////////////////
module.exports = Song;