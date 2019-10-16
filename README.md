# Music Shop Application

- Express
- Sequelize
- Postgres (10.5)
- NodeJS (10 or later)
- Yarn

## Features

An artist can upload music to the application
An artist can add a song to an album
A user can buy an album through a shopping cart

## Endpoints

Postman Collection: [![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/5e64dd7617ad8b74648f)

### Installation

This API requires you have [Node.js](https://nodejs.org/) v10+. Check your node version by typing `node -v`

```
$ git clone `https://github.com/rickynyairo/music-shop.git`
$ touch .env
$ cp .env.example .env
$ yarn lerna-bootstrap
```

### Database config

To run Sequelize commands easily on your terminal please ensure that you have the [`Sequelize-cli`](https://www.npmjs.com/package/sequelize-cli) package installed globally by running the following command:

```
yarn add global sequelize-cli
```

You will also need postgres along with its command line tools (part of normal install).
The provided config assumes a postgres user `postgres` with a blank password.

To set up the Database run the following commands in your terminal (after following the instructions above):

```
createdb music_shop
sequelize db:migrate
```

Once completed, the database is ready to go.

### App Execute

```
$ yarn start
```

This starts both the backend and the frontend application.
Now visit <http://localhost:3000>
This also starts the api server on port `3001`.

## License

- MIT
