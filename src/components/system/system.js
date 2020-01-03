const http = require('http');
const glob = require('glob');
const log4js = require('log4js');
const { app } = require('./app');
const { Utils } = require('./utils');
const config = require('../../config');

class System {

  constructor() {
    this.logger = log4js.getLogger('system');
    this.port = Utils.normalizePort(process.env.PORT || config.port);
  }

  loadModules(dirname) {
    let routes = glob.sync(dirname + '/modules/**/*.routes.js');
    routes.forEach((route) => {
      try {
        this.logger.debug(route);
        let moduleRoute = require(route);
        if (moduleRoute instanceof Function) {
          moduleRoute(app);
        } else {
          this.logger.error(route, 'is not a module');
        }
      } catch (e) {
        console.log(e.stack);
      }
    });
    return new Promise((response, reject) => {
      response(true);
    });
  }

  start() {
    return new Promise((response, reject) => {
      this.server = http.createServer(app);
      this.server.listen(this.port);
      response(true);
    });
  }
}

module.exports = { system: new System() };