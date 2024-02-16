

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


# Backend Features
- CRUD operations for managing magazines
- Subscription management (Subscribe, Cancel Subscription)
- Properly formatted code using design principles and patterns
- Unit test cases for robustness and reliability
- Public repository: GitHub Repository
# Frontend Features
- View list of all magazines
- Subscribe to a magazine
- Cancel subscription
- View all subscriptions (current and past)

# How to Run the Project Locally
```
# Clone the Repository
$ git clone https://github.com/mashood007/magazine-api
```

## Backend setup

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod

# swagger
$ use localhost:3000/api
```

## Front end setup
```bash
# install package
$ npm install
# start app
$ npm run dev
```

