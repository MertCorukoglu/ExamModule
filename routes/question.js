const express = require("express");
const Router = express.Router();
const QuestionController = require("../controllers/question")
const QuestionValidator = require("../validators/question");



Router.post("/create",
QuestionValidator.validateCreate,
QuestionValidator.validateCreateStatus,
QuestionController.create,);

Router.get("/getAllQuestions",QuestionController.getAllQuestion)

Router.post("/update",
QuestionValidator.validateUpdate,
QuestionValidator.validateUpdateStatus,
QuestionController.update
)

Router.get("/getQuestion/:id",QuestionController.getQuestion)

module.exports = Router;