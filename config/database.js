const parse = require('pg-connection-string').parse;

// The string gets parsed into an object which Lux can read and you can overwrite
// the database object with the second parameter.
function databaseObject(url, settings = {}) {
  if (!url) return console.error('[ERROR] DATABASE_URL is undefined');
  const connection = parse(url) || {};
  return Object.assign(connection, settings);
}

export default {
  development: {
    driver: 'sqlite3',
    database: 'api_dev'
  },

  test: {
    driver: 'sqlite3',
    database: 'api_test'
  },

  production: databaseObject(process.env.DATABASE_URL, {
    driver: 'pg',
    pool: { min: 0, max: 5 }
  })
};
