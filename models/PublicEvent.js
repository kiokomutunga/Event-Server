const mongoose = require("mongoose");

const PublicEventSchema = new mongoose.Schema({
  title: String,
  description: String,
  date: String,
  image: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("PublicEvent", PublicEventSchema);