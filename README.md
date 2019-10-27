

# Sword Shop

A Elder Scrolls fans dream.



#### Store home page

![web-page-1](.https://github.com/Rex-22/sword-shop/blob/master/.github/web-page-1.png)

#### About Us

![web-page-2](https://github.com/Rex-22/sword-shop/blob/master/.github/web-page-2.png)

## Prerequisite

* NodeJS (V12.13.0)
* Yarn (1.19.1)
* Docker (19.03.4)
* Docker-compose(1.24.1, build 4667896b)

## Setup

To get started make sure you installed all the [Prerequisite](#Prerequisite). After that is done simply follow these instructions.

1. Clone the repository using `git clone https://github.com/Rex-22/sword-shop.git`
2. Cd into the cloned repo `cd sword-shop/app`
3. Download the packages `yarn install`
4. Start the database with docker `docker-compose up -d`
5. Run the migration `yarn run migration`
6. Seed the database `yarn run seed`
7. Start the server after the database is running `yarn start:debug`
8. Open your browser and open http://localhost:3000
9. Done!
