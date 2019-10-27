module.exports = class Cart {
  items;
  totalQty;
  totalPrice;

  /**
     * @constructor
     * @param {Array} oldCart The items from the previous cart. Just pass an empty array if this is a new cart
     */
  constructor(oldCart) {
    this.items = oldCart.items || {};
    this.totalQty = oldCart.totalQty || 0;
    this.totalPrice = oldCart.totalPrice || 0;
  }

  /**
     * @param {Product} item The item that we want to add
     * @param {Number} id The id of the product
     */
  add = (item, id) => {
    var storedItem = this.items[id];
    if (!storedItem) {
      storedItem = this.items[id] = {
        item: item,
        qty: 0,
        price: 0
      };
    }
    storedItem.qty++;
    storedItem.price = storedItem.item.price * storedItem.qty;
    this.totalQty++;
    this.totalPrice += storedItem.item.price;
  };

  /**
     * @param {Number} id The id of the product
     */
  remove = id => {
    var storedItem = this.items[id];
    storedItem.qty--;
    storedItem.price = storedItem.item.price * storedItem.qty;
    this.totalQty--;
    this.totalPrice -= storedItem.item.price;
    if (storedItem.qty === 0) 
      delete this.items[id];
    };
  
  generateArray = () => {
    var arr = [];
    for (var id in this.items) {
      arr.push(this.items[id]);
    }
    return arr;
  };
};
