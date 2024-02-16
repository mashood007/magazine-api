

## Description

Magazines API

## Stacks
- NestJs with Typescript
- Postgresql
- TypeORM
- Swagger
- class-validator
- passport-jwt with argon2
- jest

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

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Modules

There are two type of users as follows
- Admin
  - Admin can create, update, list, delete(soft) the Magazines
- End user
  - Login and Signup
  - User Can see all the Magazines
  - Subscribe the magazines
  - Can see the list of subscriptions including past
  - cancel the subscription
# Database Schema
- Users( id, name, email, password<encrypted>)
- Magazines( id, title, description, price)
- Subscriptions (id, user, magazine, startDate, endDate, cost)

