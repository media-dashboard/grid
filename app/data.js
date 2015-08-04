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

var gridSchema = function (table) {
  table.increments();
  table.string('grid');
};

// create database, if it doesn't yet exist
knex.raw('CREATE DATABASE ' + dbname)
  .then(function(){
    knex.destroy();
    // connect with new database
    connection.database = dbname;
    knex = require('knex')({ client: 'pg', connection: connection});
  })
  .catch(function(err){ 
    // catch if database already exists
    console.log(err); 
  })
  .finally(function(){
    // add PostGIS extension
    knex.raw('CREATE EXTENSION IF NOT EXISTS PostGIS')
      .then(function() {
        knex.destroy();
      })
      .catch(function(err){ console.log(err); });
  })
  .then(function(){
    // create Bookshelf db instance
    var db = Bookshelf.initialize({
      client: 'pg',
      connection: connection
    });

    db.knex.schema.hasTable('grid').then(function(exists) {
      if (!exists) {
        db.knex.schema.createTable('grid', function (user) {
          user.increments('id').primary();
          user.string('username', 100).unique();
          user.string('password', 100);
          user.timestamps();
        }).then(function (table) {
          console.log('Created Table', table);
        });
      }
    });

    module.exports = db;
  });

