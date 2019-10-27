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

    add = (item, id) => {
        var storedItem = this.items[id];
        if (!storedItem) {
            storedItem = this.items[id] = {item: item, qty: 0, price: 0};
        }
        storedItem.qty++;
        storedItem.price = storedItem.item.price * storedItem.qty;
        this.totalQty++;
        this.totalPrice += storedItem.item.price;
    }

    generateArray = () => {
        var arr = [];
        for(var id in this.items) {
            arr.push(this.items[i]);
        }
        return arr;
    }

}