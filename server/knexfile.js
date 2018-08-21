// Update with your config settings.
const path = require('path');

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: 'ng_rolodex',
      user:     'happy_user',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: path.join(__dirname, 'db', 'migration'),
    },
    seeds: {
      directory: path.join(__dirname, 'db', 'seeds'),
    },
    debug: false
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
