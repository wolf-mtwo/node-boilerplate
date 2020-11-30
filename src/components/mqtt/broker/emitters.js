const log4js = require('log4js');

const logger = log4js.getLogger('emitter');
let mqtt_client = null;

class Emitters {

  static set_client(client) {
    mqtt_client = client;
  }

  static emit(channel, data) {
    if (!channel) {
      throw new Error('Channel is not specified');
    }
    logger.debug(`emit: ${channel} message: ${JSON.stringify(data)}`);
    mqtt_client.publish(channel, data);
  }
}

module.exports = {
  Emitters
};
