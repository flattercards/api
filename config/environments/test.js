export default {
  logging: {
    level: 'DEBUG',
    format: 'text',
    enabled: false,

    filter: {
      params: [
        'email',
        'password'
      ]
    }
  }
};
