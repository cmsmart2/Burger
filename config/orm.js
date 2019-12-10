const db = require("./connection.js");


const orm = {
    all: function(tableInput, cb) {
      let queryString = "SELECT * FROM " + tableInput + ";";
      db.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
    },
    create: function(table, val, cb) {
      let queryString = "INSERT INTO " + table + "(burger_name) VALUES ('"+val+"');"
      db.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
    },
    
    update: function(table, condition, cb) {
      let queryString = 'UPDATE'+table + 'SET devoured=true WHERE id= '+condition+ ';'
      db.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
  
        cb(result);
      });
    }
  };
  
 
  module.exports = orm;