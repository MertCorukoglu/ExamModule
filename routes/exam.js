const express = require("express");
const Router = express.Router();
const AnswerController = require("../controllers/answer");


Router.post("/answer",AnswerController.getanswers);

module.exports = Router; 