var express = require("express");
var router = express.Router();

router.get("/", (req, res, next) => {
  res.render("user/signin", {title: "User"});
});

module.exports = router;