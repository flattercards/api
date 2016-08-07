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
    username: 'flatter',
    database: 'flatter',
    password: process.env.PSQL_PASSWORD
  }
};
