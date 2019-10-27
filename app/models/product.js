const database = require("../middleware/database");

/**
 * @class Product Represents a product in our database 
 */
class Product {
    id = 0;
    name = "";
    description = "";
    short_description = "";
    price = 0;
    image_url = "";

  /**
   * This will map any data we get the members of the class
   * 
   * @param {Product} data A object with the data from a product
   */
  constructor(data) {
      this.id = Number(data.id);
    this.name = data.name;
    this.description = data.description;
    this.short_description = data.short_description;
    this.price = Number(data.price);
    this.image_url = data.image_url;
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
