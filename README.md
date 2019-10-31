# Sword Shop

A Elder Scrolls fans dream.

#### Store home page

![web-page-1](https://github.com/Rex-22/sword-shop/blob/master/.github/web-page-1.png)

#### About Us

![web-page-2](https://github.com/Rex-22/sword-shop/blob/master/.github/web-page-2.png)

## Prerequisite

* NodeJS (V12.13.0)
* Yarn (1.19.1)
* Docker (19.03.4)
* Docker-compose(1.24.1, build 4667896b)
* (Optional) MySQL(5.7)

## Setup

To get started make sure you installed all the [Prerequisite](#Prerequisite). After that is done simply follow these instructions.

### Docker

1.  Clone the repository using `git clone https://github.com/Rex-22/sword-shop.git`
2.  Cd into the cloned repo `cd sword-shop/app`
3.  Download the packages `yarn install`
4.  Start the database with docker `docker-compose up -d`
5.  Run the migration `yarn run migration`
6.  Seed the database `yarn run seed`
7.  Start the server after the database is running `yarn start:debug`
8.  Open your browser and open http://localhost:3000
9.  Done!

### MySQL

If for some reason you don't have/don't want to use docker. You can setup the website with a normal SQL database as well. To use a MySQL database make sure you have the following.

* Username: swords
* Password: sw0rdSh0p
* Root password: P@ssw0rd

The user should be able to Create, Update and Delete records and tables. So make sure he has the proper privileges.
