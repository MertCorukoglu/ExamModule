const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Answer = new Schema ({
    id: ObjectId,
    ExamUser_id: String,
    Option_id: String,
    Question_id: String,
    PassingTime: Number,

    
});

module.exports=mongoose.model('Answer',Answer);
