const { Master } = require('../../../components/adapter/master');

class Article extends Master {

  constructor() {
    super('Article');
  }
}

module.exports = { Article };
