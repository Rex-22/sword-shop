var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("shop/index", { title: "Sword Shop" });
});

/* GET about us page. */
router.get("/about_us", function(req, res, next) {
  res.render("shop/about_us", { title: "About Us" });
});

/* GET about us page. */
router.get("/contact_us", function(req, res, next) {
  res.render("shop/contact_us", { title: "About Us" });
});

module.exports = router;
