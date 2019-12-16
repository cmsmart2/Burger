var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.all("menu", function(res) {
      cb(res);
    });
  },
  
  create: function(name, cb) {
    orm.create("menu", name, cb)
  },
  
  update: function(id, cb) {
    var condition = "id=" + id;
    orm.update("menu", {
      devoured: true
    }, condition, cb)
  }
};

//send to controller
module.exports = burger;
