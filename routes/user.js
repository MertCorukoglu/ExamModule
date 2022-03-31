const express = require("express");
const Router = express.Router();
const UserController = require("../controllers/user");
const UserValidator = require("../validators/user");

Router.post("/create",
UserValidator.validateRegister,
UserValidator.valdiateRegisterStatus,
UserController.create);

module.exports = Router; 