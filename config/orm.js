const db = require("./connection.js");

const orm = {
    all: function(table, cb) {
      let queryString = "SELECT * FROM " +table+ ";";
      db.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
    },
    create: function(table, val, cb) {
      let queryString = "INSERT INTO " +table+ " (burger_name) VALUES ('"+val+"');"
      db.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
    },
    
    update: function(table, id, cb) {
      let queryString = "UPDATE " +table+ " SET devoured=true WHERE id= "+id+ ";"
      db.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
    }
  };
  
 //send to models
  module.exports = orm;