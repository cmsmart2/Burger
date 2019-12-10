const express = require("express");
const router = express.Router();
const burger = require("../models/burger.js");

router.get("/", function(_req, res) {
    burger.all(function(burger) {
      var burgerObj = {
        burgers: burger
      }
      console.log(burgerObj)
      res.render("index", (burgerObj));
    });
  });
  
  router.post("/api/burgers", function(req, res) {
    burger.create(req.body.burger_name, function(result){
      console.log(result)
    });
  });
  
  router.put("/api/burgers/devoured", function(req, res) {
    burger.update(req.body.burger_id, function(result){
      console.log(result)
    });
  });
  
  module.exports = router;
  