const config = require('../../../package.json');
const path = require('path');

class Service {

  static home(req, res, next) {
    // res.json({
    //   vesion: '0.0.0',
    //   name: config.name
    // });
    //res.render('index', 'html');
    res.sendFile(path.join(__dirname + '../../../../public/index.html'));
  }
}

module.exports = { Service };
