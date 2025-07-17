const Appointment = require("../models/Appointment");
const sendEmail = require("../utils/sendEmail");

exports.createAppointment = async (req, res) => {
  try {
    const data = req.body;
    const appointment = new Appointment(data);
    await appointment.save();
    await sendEmail("admin@ulinzi.com", "New Booking Request", `<h3>${data.organizerName} requested a booking</h3>`);
    res.status(201).json(appointment);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getUserAppointments = async (req, res) => {
  const appointments = await Appointment.find({ userId: req.user.id });
  res.json(appointments);
};

exports.updateStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  await Appointment.findByIdAndUpdate(id, { status });
  res.json({ message: "Status updated" });
};
