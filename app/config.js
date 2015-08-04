var fs = require('fs');
var knex = require('knex')({
  client: 'pg',
  connection: {
    host     : '127.0.0.1',
    // user     : 'your_database_user',
    // password : 'your_database_password',
    database : 'grid',
    charset  : 'utf8'
  }
});
var bookshelf = require('bookshelf')(knex);

module.exports = bookshelf;
