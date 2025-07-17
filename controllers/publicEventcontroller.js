const PublicEvent = require("../models/PublicEvent");

exports.createPublicEvent = async (req, res) => {
  try {
    const { title, description, date } = req.body;
    const image = req.file ? req.file.filename : null;
    const event = new PublicEvent({ title, description, date, image });
    await event.save();
    res.status(201).json({ message: "Event posted", event });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getPublicEvents = async (req, res) => {
  const events = await PublicEvent.find().sort({ createdAt: -1 });
  res.json(events);
};