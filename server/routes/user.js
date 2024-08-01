const router = require("express").Router();

const {
  handleGetTrips,
  handleAddToWishlist,
  handlePropertyList,
} = require("../controllers/user");

router.get("/:userId/trips", handleGetTrips);

// add listing to wishlist
router.patch("/:userId/:listingId", handleAddToWishlist);

// get property list
router.get("/:userId/properties", handlePropertyList);

module.exports = router;
