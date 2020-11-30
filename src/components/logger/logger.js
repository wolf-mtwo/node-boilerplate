const log4js = require('log4js');

log4js.configure({
  appenders: {
    cheese: { type: 'file', filename: 'logs/server.log' },
    server: { type: 'console' }
  },
  categories: { default: { appenders: ['server', 'cheese'], level: 'ALL' } }
});

class Logger {

  constructor() {
  }
}

module.exports = { logger: new Logger() };
