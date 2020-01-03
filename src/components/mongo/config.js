let env = process.env.NODE_ENV || 'production';

let config = {
  development: {
    db: 'mongodb://localhost/node-seed-development'
  },
  production: {
    db: 'mongodb://localhost/node-seed-production'
  }
};

module.exports = config[env];
