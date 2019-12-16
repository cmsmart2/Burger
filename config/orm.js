const db = require("./connection.js");

function objToSql(ob) {
  var arr = [];
  for (var key in ob) {
    arr.push(key + "=" + ob[key]);
  }
  return arr.toString();
}

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
    
    update: function(table, objColVals, condition, cb) {
      let queryString = "UPDATE " + table;
        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;
       
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