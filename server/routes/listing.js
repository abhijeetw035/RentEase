const router = require("express").Router();
const multer = require("multer");

const {
  handleCreateListing,
  handleGetListings,
  handleGetListingDetails,
} = require("../controllers/listing");

// multer configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

router.post("/create", upload.array("listingPhotos"), handleCreateListing);
router.get("/", handleGetListings);

router.get("/:listingId", handleGetListingDetails)


module.exports = router;