const { Message } = require('../models/message');
const { MiddlewareService } = require('../../../components/adapter/middleware.service');

let model = new Message();
let middleware = new MiddlewareService(model);

class MessageService {

  static query(req, res, next) {
    middleware.query(req, res, next);
  }

  static pagination(req, res, next) {
    middleware.pagination(req, res, next);
  }

  static create(req, res, next) {
    middleware.create(req, res, next);
  }

  static show(req, res, next) {
    middleware.show(req, res, next);
  }

  static update(req, res, next) {
    middleware.update(req, res, next);
  }

  static remove(req, res, next) {
    middleware.remove(req, res, next);
  }

  static load(req, res, next, id) {
    middleware.load(req, res, next, id);
  }

  static page(req, res, next, id) {
    middleware.page(req, res, next, id);
  }

  static limit(req, res, next, id) {
    middleware.limit(req, res, next, id);
  }
}

module.exports = { MessageService };
