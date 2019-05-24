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

  testing: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './database/SleepTracker.testing.db3'
    },
    migrations: {
      directory: './database/migrations',
    },
    seed: {
      directory: './database/seed',
    },
  },


};
