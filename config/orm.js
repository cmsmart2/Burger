const db = require("./connection.js");
const orm = {
    select: function(table){
        let queryString = "SELECT * FROM ??";
        db.query(queryString, [table], function(err, result){
          if(err) throw err;
          console.log(result);  
        })
    }
}
module.exports = orm;