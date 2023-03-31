const express = require("express");
const router = express.Router();
const { getArtistInfo } = require("../controllers/artistController");
router.route("/info").post(getArtistInfo);

module.exports = router;


//User routes?? if not remove from server