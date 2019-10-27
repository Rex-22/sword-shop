var express = require("express");
var router = express.Router();
var Product = require("../models/product");
var Cart = require("../models/cart");

/* GET home page. */
router.get("/", function(req, res, next) {
  Product.getProducts().then(result => {
    res.render("shop/index", { title: "Sword Shop", products: result });
  });
});

/* GET about us page. */
router.get("/about_us", function(req, res, next) {-
  res.render("shop/about_us", { title: "About Us" });
});

/* GET contact us page. */
router.get("/contact-us", function(req, res, next) {
    res.render("shop/contact_us", { title: "Contact Us" });
});

/* POST data from contact us page. */
router.post("/contact-us", function(req, res, next) {
    res.render("shop/contact_us", { title: "Contact Us", showMessage: true});
});

/* POST data from contact us page. */
router.get("/add-to-cart/:id", function(req, res, next) {
    var productId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});

    Product.getProduct(productId).then((result) => {
        cart.add(result, result.id);
        req.session.cart = cart;
        console.log(req.session.cart);
        res.redirect('/');
    }).catch((err) => {
        console.log(err);
        return res.redirect('/');
    });
});

module.exports = router;
