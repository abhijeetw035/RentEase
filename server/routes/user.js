const router = require("express").Router();

const {
  handleGetTrips,
  handleAddToWishlist,
  handlePropertyList,
  handleRserevationList,
} = require("../controllers/user");

router.get("/:userId/trips", handleGetTrips);

// add listing to wishlist
router.patch("/:userId/:listingId", handleAddToWishlist);

// get property list
router.get("/:userId/properties", handlePropertyList);

// reservation List
router.get("/:userId/reservations", handleRserevationList);

module.exports = router;
