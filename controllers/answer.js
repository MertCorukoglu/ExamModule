const AnswerModel = require("../models/answer");

const BaseResponse = require("../utils/baseResponse");

exports.getanswers =async (req,res,next)=>{
    try {
        
        const body = req.body;
        const answers = new AnswerModel(body);
        await QuestionModel.create(answers);
        
        res.status(200).json(BaseResponse(false,"Cevap kayıt işlemi başarılı."))
    } catch (error) {
        res.status(400).json(BaseResponse(true,undefined,error.message))
    }
    
    
}