# Bookmark Backend with Nest JS

## Description

This is a simple backend with login functionality with JWT verification for recording bookmarks. This simple backend uses [NestJS](https://nestjs.com/). [Prisma](https://www.prisma.io/) is used for communicating with the database. Containerized version with [Docker](https://www.docker.com/) will be created soon.

<p>
    <img alt="NestJS" src="https://img.shields.io/badge/nestjs-%23E0234E.svg?style=flat-squared&logo=nestjs&logoColor=white" />
    <img alt="Prisma" src="https://img.shields.io/badge/Prisma-3982CE?style=flat-squared&logo=Prisma&logoColor=white" />
    <img alt="JWT" src="https://img.shields.io/badge/JWT-black?style=flat-squared&logo=JSON%20web%20tokens" />    
</p>

You can access more badges and their purposes at [shields.io](https://shields.io/)

## Table of Contents

- [Installation](#installation)
- [Running the app](#running-the-app)
- [Test](#test)
- [Usage with Docker](#usage-with-docker)

## Installation

```bash
npm install
# or
yarn
```

## Running the app

```bash
# development
npm run start
# or
yarn start

# watch mode
npm run start:dev
# or
yarn start:dev

# production mode
npm run start:prod
# or
yarn start:prod
```

## Test

Only e2e has been fully implemented. Others tests are soon to be implemented.

End-to-end testing is performed with [Pactum JS](https://pactumjs.github.io/) and [Jest](https://jestjs.io/)

<p>
    <img alt="Jest" src="https://img.shields.io/badge/-jest-%23C21325?style=flat-squared&logo=jest&logoColor=white" />   
</p>

```bash
# unit tests
$ npm run test
# or
yarn test

# e2e tests
$ npm run test:e2e
# or
yarn test:e2e

# test coverage
$ npm run test:cov
# or
yarn test:cov

```

## Usage with docker

Make sure you have Docker installed in your device. For more details regarding installation of Docker, please visit their official [Docker installation site](https://docs.docker.com/get-docker/)

To run docker container visit the root directory of the project

<p>
    <img alt="Docker" src="https://img.shields.io/badge/docker-%230db7ed.svg?style=flat-squared&logo=docker&logoColor=white" />
</p>

```bash
# Run docker compose
docker compose up

# To ru nin detach mode
docker compose up -d
```

On successful running of container you should see something like this

![Running Container](https://github.com/Nischal2015/sanity-next-ui/blob/master/public/docker.png?raw=true)

The api is exposed in port 3333. Enjoy &#128522;
