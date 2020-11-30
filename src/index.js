const log4js = require('log4js');
require('./components/logger');
const { system } = require('./components/system');
const { mongo } = require('./components/mongo');
const { MQTTClient } = require('./components/mqtt');
let logger = log4js.getLogger('app');

(async () => {
  try {
    await mongo.start();
    await mongo.loadModels(__dirname);
    await system.loadModules(__dirname);
    await system.start();
    MQTTClient.start();
    logger.info('server started at port: ' + system.port);
  } catch(err) {
    logger.error(err);
  }
})();
