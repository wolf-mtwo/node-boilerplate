const { Message } = require('../models/message');
const { Emitters } = require('../../../components');
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

  static sync(req, res, next) {
    try {
      let device_id = req.params.device_id;
      let body = req.body;
      console.log(device_id);
      console.log(body);
      Emitters.emit(`/v1/${device_id}/servo`, {
        a: body.speed.toString(),
        g: body.gpio.toString()
      });
      res.json({});
    } catch (err) {
      next(err);
    }
  }

  static portion(req, res, next) {
    try {
      let device_id = req.params.device_id;
      let body = req.body;
      console.log(device_id);
      console.log(body);
      Emitters.emit(`/v1/${device_id}/servo-portion`, {
        p: body.portion.toString(),
        a: "t",
        g: body.gpio.toString()
      });
      res.json({});
    } catch (err) {
      next(err);
    }
  }
}

module.exports = { MessageService };
