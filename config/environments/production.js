export default {
  logging: {
    level: 'WARN',
    format: 'json',
    enabled: true,

    filter: {
      params: [
        'email',
        'password'
      ]
    }
  }
};
