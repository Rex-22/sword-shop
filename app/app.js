var express = require("express");
var path = require("path");
var logger = require("morgan");
var favicon = require("serve-favicon");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
var expressHbs = require("express-handlebars");
var session = require("express-session");
var flash = require("connect-flash");
var MySQLStore = require("express-mysql-session")(session);
var database = require("./middleware/database");

var routes = require("./routes/");
var userRouter = require("./routes/users");

var app = express();

var sessionOptions = {
  expiration: 180 * 60 * 1000,
  schema: {
    tableName: "sessions",
    columnNames: {
      session_id: "session_id",
      expires: "expires",
      data: "data"
    }
  }
};

var sessionStore = new MySQLStore(sessionOptions, database);

// View engine setup
app.engine(".hbs", expressHbs({defaultLayout: "layout", extname: ".hbs"}));
app.set("view engine", ".hbs");

app.use(favicon(path.join(__dirname, "public/images", "favicon.ico")));
app.use(session({key: "sword_store", secret: "dontcare", store: sessionStore, resave: false, saveUninitialized: false}));
app.use(flash());
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(function (req, res, next) {
  res.locals.session = req.session;
  next();
});

app.use("/", routes);
app.use("/user", userRouter);

// Catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// Development error handler
// Will print stacktrace
if (app.get("env") === "development") {
  app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render("error", {
      message: err.message,
      error: err
    });
  });
}

// Production error handler
// No stacktraces leaked to user
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.render("error", {
    message: err.message,
    error: {}
  });
});

module.exports = app;
