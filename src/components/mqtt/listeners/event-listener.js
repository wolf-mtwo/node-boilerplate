const log4js = require('log4js');
const { Message } = require('../../../modules/v1/models/message');

let model = new Message();
const logger = log4js.getLogger('event-listener');

class EventListener {

  static async new_device(event) {
    const device = await model.find_one({
      device_id: event.d
    });
    if (device) {
      logger.info('device already exist');
      return;
    }
    const item = await model.create({
      device_id: event.d,
      hostname: event.h
    });
    console.log(item);
  }
}

module.exports = {
  EventListener
};

