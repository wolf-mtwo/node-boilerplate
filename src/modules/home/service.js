const config = require('../../../package.json');

class Service {

  static home(req, res, next) {
    res.json({
      vesion: '0.0.0',
      name: config.name
    });
  }
}

module.exports = { Service };
