<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

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
