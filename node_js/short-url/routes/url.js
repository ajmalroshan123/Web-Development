const express =  require("express");
const {handleGenetateShortUrl, handleRedirect, handleGetAnalytics} = require("../controllers/url");

const router = express.Router();

router.post("/", handleGenetateShortUrl);

router.get("/:shortId",handleRedirect)

router.get("/analytics/:shortId", handleGetAnalytics)

module.exports = router;