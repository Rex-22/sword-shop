var express = require("express");
var router = express.Router();
var Product = require("../models/product");

/* GET home page. */
router.get("/", function(req, res, next) {
  Product.getProducts().then(result => {
    res.render("shop/index", { title: "Sword Shop", products: result });
  });
});

/* GET about us page. */
router.get("/about_us", function(req, res, next) {
  res.render("shop/about_us", { title: "About Us" });
});

/* GET about us page. */
router.get("/contact_us", function(req, res, next) {
    res.render("shop/contact_us", { title: "Contact Us" });
});

router.post("/contact_us", function(req, res, next) {
    res.render("shop/contact_us", { title: "Contact Us", showMessage: true});
});

module.exports = router;
