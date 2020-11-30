var mqtt = require('mqtt');
const log4js = require('log4js');
const { Listeners, Subscriber, Emitters } = require('./broker');

const logger = log4js.getLogger('main');
const client  = mqtt.connect('mqtt://204.48.25.40:1883');
let devices = [];
let listener = null;
let subscriber = null;

class MQTTClient {

  static start() {
    client.on('connect', () => {
      logger.info('successful connection');
      listener = new Listeners(client);
      listener.start();
      subscriber = new Subscriber(client, devices);
      Emitters.set_client(client);
    });

    client.on('message', (topic, message) => {
      const data = message.toString();
      logger.debug(`on: ${topic} message: ${data}`);
      try {
        subscriber.parse(topic, data);
      } catch (err) {
        logger.error(err);
      }
    });
  }
}

module.exports = {
  MQTTClient
};