const express = require("express");
const Router = express.Router();
const UserController = require("../controllers/user")

Router.post("/create",UserController.create);

module.exports = Router; 