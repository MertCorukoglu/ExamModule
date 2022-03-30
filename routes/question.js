const express = require("express");
const Router = express.Router();
const QuestionController = require("../controllers/question")


Router.post("/create",QuestionController.create);

module.exports = Router;
checkedQuestion 