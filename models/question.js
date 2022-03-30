const mongoose = require("mongoose");
const option = require("./option")

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Question = new Schema ({
    id: ObjectId,
    Title: String,
    Content: String,
    QuestionNo: Number,
    QuestionType: Number
    
})

module.exports=mongoose.model('Question',Question);