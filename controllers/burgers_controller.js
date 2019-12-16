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
  
  router.put("/menu/update/:id", function(req, res) {
    burger.update(req.params.id, function(result){
      console.log(result);
      res.sendStatus(200);
    });
  });
  
  module.exports = router;
  