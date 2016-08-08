const parse = require('pg-connection-string').parse;

// The string gets parsed into an object which Lux can read and you can overwrite
// the database object with the second parameter.
function databaseObject(url, settings = {}) {
  if (!url) return console.error('[ERROR] DATABASE_URL is undefined');
  const connection = parse(url) || {};

  // Lux uses username instead of user
  if (connection.user) {
    connection.username = connection.user;
    delete connection.user;
  }

  // Merge the objects, the settings will overwrite the values of the connection
  // if there is a overlapping value.
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
