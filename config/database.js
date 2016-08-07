if (!process.env.PSQL_PASSWORD) require('dotenv').config();

export default {
  development: {
    driver: 'sqlite3',
    database: 'api_dev'
  },

  test: {
    driver: 'sqlite3',
    database: 'api_test'
  },

  production: {
    driver: 'pg',
    username: 'postgres',
    domain: 'dokku-postgres-lux-database',
    port: 5432,
    database: 'lux_database',
    password: '93939090beff73ce60cf53dbfdd98dd5'
  }
};
