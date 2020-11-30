const express = require('express');
const { Service } = require('./service');

module.exports = (app) => {
  let router = express.Router();
  router.get('/', Service.home);
  app.use('/', router);
};
