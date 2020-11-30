const mongoose = require('mongoose');
const config = require('../../config');
const glob = require('glob');
const log4js = require('log4js');

let logger = log4js.getLogger('database');
mongoose.Promise = global.Promise;

class MongoDB {

  start() {
    return new Promise((response, reject) => {
      mongoose.connect(config.db, { useUnifiedTopology: true, useNewUrlParser: true });
      const db = mongoose.connection;
      db.once('open', () => {
        logger.info('mongodb has started');
        response();
      });
      db.on('error', (err) => {
        reject(err);
      });
    });
  }

  loadModels(dirname) {
    let models = glob.sync(dirname + '/**/*.schema.js');
    models.forEach((model) => {
      try {
        logger.debug(model);
        require(model);
      } catch (e) {
        console.log(e.stack);
      }
    });
    return new Promise((response, reject) => {
      response();
    });
  }
}

module.exports = { mongo: new MongoDB() }
