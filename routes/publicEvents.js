const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload");
const { createPublicEvent, getPublicEvents } = require("../controllers/publicEventController");

router.post("/create", upload.single("image"), createPublicEvent);
router.get("/", getPublicEvents);

module.exports = router;