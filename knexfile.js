// Update with your config settings.
const sharedConfig = {
  client: 'postgresql',
  migrations: {
    tableName: 'knex_migrations',
    directory: './db/migrations'
  }
}

module.exports = {
  development: {
    ...sharedConfig,
    connection: {
      database: 'amazon-express_dev'
    }
  },

  staging: {
    ...sharedConfig,
    connection: {
      database: 'amazon-express_dev'
    }
  },

  production: {
    ...sharedConfig,
    connection: {
      database: 'amazon-express_dev'
    }
  }

};