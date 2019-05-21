// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './database/SleepTracker.db3'
    },
    migrations: {
      directory: './database/migrations',
    },
    seed: {
      directory: './database/seed',
    },
  },

  test: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './database/SleepTracker.test.db3'
    },
    migrations: {
      directory: './database/migrations',
    },
    seed: {
      directory: './database/seed',
    },
  },


};
