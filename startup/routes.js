const express = require('express');
const genres = require("../routes/genres");
const customers = require("../routes/customers");
const movies = require("../routes/movies");
const users = require("../routes/users");
const auth = require("../routes/auth");
const error = require('../middleware/error');

module.exports = function(app) {

  app.use(express.json()); // parse the body of the req in the RPP
  app.use("/api/genres", genres);
  app.use("/api/customers", customers);
  app.use("/api/movies", movies);
  app.use("/api/users", users);
  app.use("/api/auth", auth);
  app.use(error);

};
