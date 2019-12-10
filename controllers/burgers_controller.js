const express = require("express");
const router = express.Router();
const burger = require("../models/burger.js");

router.get("/", function(_req, res) {
    burger.all(function(data) {
      res.render("index", {data});
    });
  });
  
  router.post("/api/burgers", function(req, res) {
    burger.create(req.body.burger_name, function(result){
      console.log(result)
      res.redirect('/')
    });
  });
  
  router.put("/api/burgers/devoured", function(req, res) {
    burger.update(req.body.burger_id, function(result){
      console.log(result)
      res.redirect('/')
    });
  });
  
  module.exports = router;
  