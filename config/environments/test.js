export default {
  logging: {
    level: 'WARN',
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
