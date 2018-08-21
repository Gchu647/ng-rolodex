const bookshelf = require('./bookshelf');

class Contact extends bookshelf.Model {
  get tableName() { return 'users'; }
  get hasTimestamps() { return true; }

  users() {
    return this.belongsTo('User', 'created_by');
  }
}

module.exports = bookshelf.model('Contact', Contact);