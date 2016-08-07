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
    pool: {
      min: 0,
      max: 5
    },
    driver: 'pg',
    database: '7e932a5d37532a767aa87778f46cacd5',
    url: 'postgres://bfa2319d83596d60bfc5c144f4604a3a:43090f8402e95429d29078c84969e837@669p.flynnhub.com:3282/7e932a5d37532a767aa87778f46cacd5'
  }
};
