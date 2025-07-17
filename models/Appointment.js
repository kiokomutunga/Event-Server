const mongoose = require("mongoose");

const AppointmentSchema = new mongoose.Schema({
  eventTitle: String,
  organizerName: String,
  email: String,
  phone: String,
  eventDate: String,
  startTime: String,
  endTime: String,
  venue: String,
  category: String,
  attendees: Number,
  description: String,
  specialRequirements: String,
  status: {
    type: String,
    enum: ["Pending", "Approved", "Rejected"],
    default: "Pending",
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("Appointment", AppointmentSchema);

