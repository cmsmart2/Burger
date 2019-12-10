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
    orm.update("menu", id, cb)
  }
};

//send to controller
module.exports = burger;
