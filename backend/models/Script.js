const mongoose = require("mongoose");

const ScriptSchema = new mongoose.Schema({
  name: String,
  description: String,
  downloadLink: String,
  domain: String
});

module.exports = mongoose.model("Script", ScriptSchema);
