const express = require("express");
const router = express.Router();
const { createAppointment, getUserAppointments, updateStatus } = require("../controllers/appointmentController");

router.post("/create", createAppointment);
router.get("/my", getUserAppointments);
router.patch("/:id/status", updateStatus);

module.exports = router;