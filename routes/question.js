const express = require("express");
const Router = express.Router();
const QuestionController = require("../controllers/question")


Router.post("/create",QuestionController.create);

Router.get("/getQuestions",QuestionController.getQuestion)

module.exports = Router; 