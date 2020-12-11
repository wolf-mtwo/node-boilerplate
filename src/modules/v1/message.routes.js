const express = require('express');
const { MessageService } = require('./services/message.service');

module.exports = (app) => {
  let router = express.Router();

  router.get('/messages', MessageService.query);
  router.get(
    '/messages/page/:page/limit/:limit', MessageService.pagination
  );
  router.post('/messages', MessageService.create);
  router.post('/messages/:device_id/devices', MessageService.sync);
  router.post('/messages/:device_id/portion', MessageService.portion);
  
  router.route('/messages/:message_id')
  .get(MessageService.show)
  .put(MessageService.update)
  .delete(MessageService.remove);
  router.param('page', MessageService.page);
  router.param('limit', MessageService.limit);
  router.param('message_id', MessageService.load);

  app.use('/v1', router);
};
