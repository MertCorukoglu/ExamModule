const mongoose = require("mongoose");
const { v4: uuidv4 } = require('uuid');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Question = new Schema ({
    id: ObjectId,
    Title: String,
    Content: String,
    QuestionNo: Number,
    QuestionType: Number,
    Options: {
        type: [{
            id:ObjectId,
            // id: {type:ObjectId,
            // default: uuidv4()},
            Content: String,
            isCorrect: Boolean
        }],
        default: []
      }
    
})

module.exports=mongoose.model('Question',Question);