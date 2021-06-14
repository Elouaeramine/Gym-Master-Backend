<p align="center">
  <a href="http://nestjs.com/" target="blank"><g xmlns="http://www.w3.org/2000/svg" id="Group_1716" data-name="Group 1716" transform="translate(-4336 -1162)">
          <rect id="Rectangle_334-2" data-name="Rectangle 334" class="cls-10" width="16" height="88" rx="8" transform="translate(4569 1201)"/>
          <rect id="Rectangle_337-2" data-name="Rectangle 337" class="cls-10" width="17" height="59" rx="8.5" transform="translate(4588 1216)"/>
          <rect id="Rectangle_338-3" data-name="Rectangle 338" class="cls-10" width="16" height="88" rx="8" transform="translate(4503 1202)"/>
          <rect id="Rectangle_339-3" data-name="Rectangle 339" class="cls-10" width="17" height="59" rx="8.5" transform="translate(4483 1217)"/>
          <rect id="Rectangle_341-2" data-name="Rectangle 341" class="cls-10" width="16" height="43" rx="8" transform="translate(4566 1239) rotate(90)"/>
        </g></a>
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
