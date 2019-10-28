var database = require("../middleware/database");

var seedCount = 0;

// Products table
database.query(`CREATE TABLE db.products (
            id INT auto_increment NOT NULL,
            name varchar(100) NULL,
            description TEXT NULL,
            short_description varchar(255) NULL,
            price DECIMAL NULL,
            image_url varchar(100) NULL,
            CONSTRAINT products_PK PRIMARY KEY (id)
        )ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;`).then(result => {
            seedCount++;
            if (seedCount == 4) process.exit(0);
        }).catch(err => {
  console.log(err);
  process.exit(1);
});

database.query(`CREATE TABLE db.orders (
    id int(11) NOT NULL AUTO_INCREMENT,
    cart_id int(11) NOT NULL,
    PRIMARY KEY (id),
    KEY orders_FK (cart_id)
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8;`).then(result => {
      seedCount++;
      if (seedCount == 4) process.exit(0);
}).catch(err => {
  console.log(err);
  process.exit(1);
});

database.query(`CREATE TABLE db.cart (
    id  int(11) NOT NULL AUTO_INCREMENT,
    cart_id  int(11) NOT NULL,
    cart_item  int(11) NOT NULL,
   PRIMARY KEY ( id ),
   KEY  cart_FK  ( cart_item ),
   CONSTRAINT  cart_FK  FOREIGN KEY ( cart_item ) REFERENCES  cart_item  ( id )
 ) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;`).then(result => {
     seedCount++;
     if (seedCount == 4) process.exit(0);
}).catch(err => {
  console.log(err);
  process.exit(1);
});

database.query(`CREATE TABLE db.cart_item (
    id  int(11) NOT NULL AUTO_INCREMENT,
    product_id  int(11) NOT NULL,
    cart_id  int(11) NOT NULL,
    quantity  int(11) DEFAULT NULL,
   PRIMARY KEY ( id )
 ) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;`).then(result => {
     seedCount++;
    if (seedCount == 4) process.exit(0);
}).catch(err => {
  console.log(err);
  process.exit(1);
});
