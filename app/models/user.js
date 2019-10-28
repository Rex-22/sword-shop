const database = require("../middleware/database");
const bcrypt = require("bcrypt");

/**
 * @class Product Represents a product in our database
 */
module.exports = class User {
  email = "";

  static comparePassword = (email, password) => {
    database.query("SELECT password FROM users WHERE email=?", email).then(result => {
      bcrypt.compare(password, result[0][0], function (err, res) {
        if (err) {
          console.log(err);
        }
        return res;
      });
    }).catch(err => {
      console.log(err);
    });
  };

  /**
     *
     * @param {String} email The email address of the user
     * @param {String} password The un-hashed password of the user
     */
  static saveUser = (email, password) => {
    bcrypt.hash(password, 10, function (err, hash) {
      database.query("CALL add_user(?, ?)", [email, hash]).catch(err => {
        console.log(err);
      });
    });
  };
};
