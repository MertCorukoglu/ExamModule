const mongoose = require("mongoose");



const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Option = new Schema ({
    id: ObjectId,
    Content: String,
    Question_id: String,
    
})

module.exports=mongoose.model('Option',Option);