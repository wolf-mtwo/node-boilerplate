//const _ = require('lodash');

class MiddlewareService {

  constructor(model) {
    this.model = model;
    this.model_name = this.model.model_name.toLowerCase();
  }

  async query(req, res, next) {
    try {
      let query = req.query || {};
      const items = await this.model.query(query);
      res.json(items);
    } catch (err) {
      next(err);
    }
  }

  async pagination(req, res, next) {
    try {
      let query = req.query || {};
      const items = await this.model.pagination(query, req.page, req.limit);
      res.json(items);
    } catch (err) {
      next(err);
    }
  }

  async pagination_short(req, res, next) {
    try {
      let query = req.query || {};
      const items = await this.model.pagination_short(query, req.page, req.limit, '-created');
      res.json(items);
    } catch (err) {
      next(err);
    }
  }

  async create(req, res, next) {
    try {
      const item = await this.model.create(req.body);
      res.json(item);
    } catch (err) {
      next(err);
    }
  }

  show(req, res) {
    res.json(req[this.model_name]);
  }

  async update(req, res, next) {
    try {
      let item = req[this.model_name];
      item = _.extend(item, req.body);
      const result = await this.model.update(item);
      res.json(result);
    } catch (err) {
      next(err);
    }
  }

  async remove(req, res, next) {
    try {
      let data = req[this.model_name];
      //const item = await this.model.remove(data);
      //res.json(item);
      res.json({});
    } catch (err) {
      next(err);
    }
  }

  async load(req, res, next, id) {
    if (!id) {
      throw new Error('id is undefined');
    }
    try {
      req.body[this.model_name] = id;
      const item = await this.model.get_by_id(id);
      req[this.model_name] = item;
      next();
    } catch (err) {
      next(err);
    }
  }

  page(req, res, next, id) {
    if (!id) {
      throw new Error('page is undefined');
    }
    req.page = parseInt(id);
    next();
  }

  limit(req, res, next, id) {
    if (!id) {
      throw new Error('limit is undefined');
    }
    req.limit = parseInt(id);
    next();
  }
}

module.exports = { MiddlewareService };
