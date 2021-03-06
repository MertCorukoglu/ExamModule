const QuestionModel = require("../models/question");

const BaseResponse = require("../utils/baseResponse");

exports.create = async(req,res,next) => {
    try {
        req
        const body = req.body;
        const question = new QuestionModel(body);
        await QuestionModel.create(question);
        
        res.status(200).json(BaseResponse(false,"Soru kayıt işlemi başarılı."))
    } catch (error) {
        res.status(400).json(BaseResponse(true,undefined,error.message))
    }
};

exports.getAllQuestion = async(req,res,next)=>{
    try {
        let question = await QuestionModel.find();
        
        res.status(200).json(BaseResponse(false,question))
        
        
        
    } catch (error) {
        res.status(400).json(BaseResponse(true,undefined,error.message))
    }
};
exports.update = async(req,res,next) => {
    try {
        const body = req.body;
        const question = new QuestionModel(body);
        
        await QuestionModel.findByIdAndUpdate(question._id,question)

        res.status(200).json(BaseResponse(false,question))

    } catch (error) {
        res.status(400).json(BaseResponse(true,undefined,error.message))

    }
};

exports.getQuestion = async(req,res,next)=>{
    try {
        let question = await QuestionModel.findById(req.params.id)

        res.status(200).json(BaseResponse(false,question))
        
        
        
    } catch (error) {
        res.status(400).json(BaseResponse(true,undefined,error.message))
    }
};
