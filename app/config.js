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
var db = require('bookshelf')(knex);

// db.knex.schema.hasTable('grid').then(function(exists){
//   if(!exists){
//     db.knex.schema.createTable('gird', function(grid){
//       link.increments('id').primary();
//       link.specificType('geo', 'geom');
//     });
//   }
// });

module.exports = db;
