const log4js = require('log4js');
const { TOPICS } = require('../constants');
const { Emitters } = require('./emitters');
const { EventListener } = require('../listeners');

const logger = log4js.getLogger('subscriber');

class Subscriber {
  constructor(client, devices) {
    this.client = client;
    this.devices = devices;
  }

  parse(topic, message) {
    const data = JSON.parse(message);
    switch (topic) {
      case TOPICS.NEW_DEVICE:
        EventListener.new_device(data)
        .catch(console.log);
        Emitters.emit(
          TOPICS.START.replace('/+/', `/${data.d}/`), { r: 'wargos' }
        );
        break;
      case TOPICS.HEARTBEAT:
        logger.info('heartbeat:', data);
        break;

      case 'inTopic':
        logger.info('inTopic');
        break;
        
      default:
        throw new Error(`topic does not exist: ${topic}`, data);
    }
  }
}

module.exports = {
  Subscriber
};
