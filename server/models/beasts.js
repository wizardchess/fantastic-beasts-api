const mongoose = require('mongoose');

//Pulls out schema out of mongoose
const Schema = mongoose.Schema;

const BeastSchema = new Schema({
  name: String,
  classification: String,
  location: String,
});

module.exports = mongoose.model('Beast', BeastSchema);