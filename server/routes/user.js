const router = require("express").Router();

const { handleGetTrips } = require("../controllers/user");

router.get("/:userId/trips", handleGetTrips);

module.exports = router;