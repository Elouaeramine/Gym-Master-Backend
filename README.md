<p align="center">
  <a href="#"><img src="https://i.ibb.co/Syxz2kL/Group-1791.png" alt="Group-1791" border="0" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

## Description

Gym Master allows users to find a gym according to his preferences. 
( Location , Name , Packs ) and more criterias by creating accounts and browsing gyms . 
Users  can also read Fitness blogs.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```



## Database Connection 
In this project we are using MySQL database.
To enable database access via TypeORM . You should create a new MySQL user
```bash
# Creating a new user
mysql> CREATE USER gymmaster@localhost IDENTIFIED BY 'GymMaster';


# Adding privileges
mysql> GRANT ALL PRIVILEGES ON * . * TO  gymmaster@localhost;

# Applying changes
mysql> FLUSH PRIVILEGES;
```

To Connect with the new user 
```bash

# Connecting with the new user
mysql> mysql -u gymmaster -p 

# Enter Password : 

```

Then you should create a database called gymmaster.
```bash

# Creating a new database 
mysql> CREATE DATABASE gymmaster;

```
## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```


## License

Nest is [MIT licensed](LICENSE).
