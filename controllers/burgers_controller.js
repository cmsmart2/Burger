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
  
  router.post("/menu/create", function(req, res) {
    burger.create(req.body.burger_name, function(result){
      console.log(result);
      res.redirect("/");
    });
  });
  
  router.put("/menu/update", function(req, res) {
    console.log(req.body.menu_id)
    burger.update(req.body.id, function(result){
      console.log(result);
      res.redirect("/");
    });
  });
  
  module.exports = router;
  