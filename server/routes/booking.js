const router = require("express").Router();

const { handleCreateBooking } = require("../controllers/booking");

router.post("/create", handleCreateBooking);

module.exports = router;