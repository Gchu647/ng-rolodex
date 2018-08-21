const bookshelf = require('./bookshelf');

class Client extends bookshelf.Model {
  get tableName() { return 'users'; }
  get hasTimestamps() { return true; }

  clients() {
    return this.belongsTo('User', 'created_by');
  }
}

module.exports = bookshelf.model('Client', Client);