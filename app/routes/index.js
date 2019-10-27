var express = require("express");
var router = express.Router();
var Product = require("../models/product");
var Cart = require("../models/cart");

router.get("/", function (req, res, next) {
  Product.getProducts().then(result => {
    res.render("shop/index", {
      title: "Sword Shop",
      products: result
    });
  });
});

router.get("/about-us", function (req, res, next) {-res.render("shop/about_us", {title: "About Us"});
});

router.get("/contact-us", function (req, res, next) {
  res.render("shop/contact_us", {title: "Contact Us"});
});

router.get("/cart", function (req, res, next) {
  if (!req.session.cart) {
    return res.render("shop/cart", {
      title: "Cart",
      products: null
    });
  }
  var cart = new Cart(req.session.cart);
  res.render("shop/cart", {
    title: "Cart",
    products: cart.generateArray(),
    totalPrice: cart.totalPrice
  });
});

router.post("/contact-us", function (req, res, next) {
  res.render("shop/contact_us", {
    title: "Contact Us",
    showMessage: true
  });
});

router.get("/add-to-cart/:id", function (req, res, next) {
  var productId = req.params.id;
  var cart = new Cart(
    req.session.cart
    ? req.session.cart
    : {});

  Product.getProduct(productId).then(result => {
    cart.add(result, result.id);
    req.session.cart = cart;
    res.redirect("/cart");
  }).catch(err => {
    console.log(err);
    return res.redirect("/");
  });
});

router.get("/remove-from-cart/:id", function (req, res, next) {
  var productId = req.params.id;
  var cart = new Cart(req.session.cart);

  Product.getProduct(productId).then(result => {
    cart.remove(result.id);
    req.session.cart = cart;
    res.redirect("/cart");
  }).catch(err => {
    console.log(err);
    return res.redirect("/");
  });
});

router.get("/checkout", function (req, res, next) {
  if (req.session.cart) {
    res.render("shop/checkout");
  } else {
    res.render("error", {
      message: "No items in cart",
      error: {
        status: "There are no items in your cart. Add some before checking out!"
      }
    });
    //TODO Save cart to database
    //TODO Users.... we need them
  }
});

module.exports = router;
