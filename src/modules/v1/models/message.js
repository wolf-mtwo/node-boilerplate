const { Master } = require('../../../components/adapter/master');

class Message extends Master {

  constructor() {
    super('Message');
  }
}

module.exports = { Message };
