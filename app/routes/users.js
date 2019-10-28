var express = require("express");
var router = express.Router();
var User = require("../models/user");

router.get("/sign-in", (req, res, next) => {
  if (req.statusCode == 400) {
    res.render("user/login", {
      title: "Sign In",
      invalidPassword: true
    });
  } else {
    res.render("user/login", {title: "Sign In"});
  }
});

router.get("/sign-up", (req, res, next) => {
  if (req.statusCode == 400) {
    res.render("user/login", {
      title: "Sign Up",
      invalidPassword: true
    });
  } else {
    res.render("user/login", {title: "Sign Up"});
  }
});

router.post("/sign-up", (req, res, next) => {
  if (RegExp("(?=.*d)(?=.*[a-z])(?=.*[A-Z]).{8,}").test(req.body.password)) {
    User.saveUser(req.body.email, req.body.password);
    res.redirect("/");
  } else {
    res.redirect("/sign-up", 400);
  }
});

router.post("/sign-in", (req, res, next) => {
  if (RegExp("(?=.*d)(?=.*[a-z])(?=.*[A-Z]).{8,}").test(req.body.password)) {
    User.login(req.body.email, req.body.password);
    res.redirect("/");
  } else {
    res.redirect("/sign-up", 400);
  }
});

module.exports = router;