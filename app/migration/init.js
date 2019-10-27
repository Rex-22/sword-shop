var database = require("../middleware/database");

database
  .query(
    `CREATE TABLE db.products (
            id INT auto_increment NOT NULL,
            name varchar(100) NULL,
            description TEXT NULL,
            short_description varchar(255) NULL,
            price DECIMAL NULL,
            image_url varchar(100) NULL,
            CONSTRAINT products_PK PRIMARY KEY (id)
        )
        ENGINE=InnoDB
        DEFAULT CHARSET=utf8
        COLLATE=utf8_general_ci;`
  )
  .then(result => {
    process.exit(0);
  })
  .catch(err => {
    console.log(err);
    process.exit(1);
  });
