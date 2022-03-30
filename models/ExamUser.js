const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const ExamUser = new Schema({
  id: ObjectId,
  NameSurname: String,
  Email: String,
  Phone: String,
  WorkingPosition: String,
  WorkingIndustry: String,
});


module.exports=mongoose.model('ExamUser',ExamUser);