const database = require("../middleware/database");

// Represents a product in our database
class Product {
  name;
  description;
  short_description;
  price;
  image_url;

  // This will map any data we get the members of the class
  constructor(data) {
    Object.assign(this, data);
  }

  static async getProduct(id) {
    var promise = new Promise((resolve, reject) => {
      database
        .query("SELECT * FROM products WHERE id=? LIMIT 1", [id])
        .then(result => {
          resolve(new Product(result[0][0]));
        })
        .catch(err => {
          console.error(err);
          reject(err);
        });
    });
    return promise;
  }

  static async getProducts() {
    var promise = new Promise((resolve, reject) => {
      database
        .query("SELECT * FROM products")
        .then(result => {
          var products = new Array();
          result[0].forEach(e => {
            products.push(new Product(e));
          });
          resolve(products);
        })
        .catch(err => {
          console.error(err);
          reject(err);
        });
    });
    return promise;
  }
}

// Export the class so we can use it in other files
module.exports = Product;
