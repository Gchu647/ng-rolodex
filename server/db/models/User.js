const bookshelf = require('./bookshelf');

class User extends bookshelf.Model {
  get tableName() { return 'users'; }
  get hasTimestamps() { return true; }

  clients() {
    return this.hasMany('Client', 'created_by');
  }
}

module.exports = bookshelf.model('User', User);