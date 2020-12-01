const log4js = require('log4js');
const { Message } = require('../../../modules/v1/models/message');

let model = new Message();

class EventListener {

  static async new_device(event) {
    const item = await model.create({
      device_id: event.id,
      hostname: event.host
    });
    console.log(item);
  }
}

module.exports = {
  EventListener
};

