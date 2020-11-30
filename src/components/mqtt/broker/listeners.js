const log4js = require('log4js');
const { TOPICS } = require('../constants');

const logger = log4js.getLogger('listeners');

class Listeners {
  constructor(client) {
    this.client = client;
  }

  start() {
    this.client.subscribe(TOPICS.HEARTBEAT, (err) => {
      if (err) {
        logger.error(err);
      }
    });
    this.client.subscribe(TOPICS.NEW_DEVICE, (err) => {
      if (err) {
        logger.error(err);
      }
    });
    this.client.subscribe('inTopic', (err) => {
      if (err) {
        logger.error(err);
      }
    });
  }
}

module.exports = {
  Listeners
};