var db = require('../config.js');

var Grid = db.Model.extend({
  tableName: 'grid',
});

module.exports = Grid;
