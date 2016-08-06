export default {
  logging: {
    level: 'ERROR',
    format: 'text',
    enabled: true,

    filter: {
      params: [
        'email',
        'password'
      ]
    }
  }
};
