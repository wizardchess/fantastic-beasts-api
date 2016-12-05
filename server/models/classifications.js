const mongoose = require('mongoose');

//Pulls out schema out of mongoose
const Schema = mongoose.Schema;

const ClassificationSchema = new Schema({
  class: String,
  description: String
});

module.exports = mongoose.model('Classification', ClassificationSchema);