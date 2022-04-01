const AnswerModel = require("../models/answer");
const QuestionModel = require("../models/question")

const BaseResponse = require("../utils/baseResponse");

exports.getanswers =async (req,res,next)=>{
    try {
        let TotalPoint = 0;
        let array =[];
        const body = req.body;
        array.push(body);
        let question = await QuestionModel.find();
        console.log("TİPİ",typeof(body))
        // body.map((item,index)=>{
        //     return question.map((qu,ind)=>{
        //         if (qu.Options.some(x=>x._id === item.Question_id)) {
        //             TotalPoint += qu.QuestionPoint;
        //         }
        //     })

        // })
        array.forEach(element => {
            if (question.some((ques,ind)=>{

               ques.Options._id === element.Question_id
            })) {
                TotalPoint += ques.QuestionPoint;
            }
        });
        
        res.status(200).json(TotalPoint);
        console.log("asdads",TotalPoint);
        
        // res.status(200).json(BaseResponse(false,"Cevap kayıt işlemi başarılı."))
    } catch (error) {
        res.status(400).json(BaseResponse(true,undefined,error.message))
    }
    
    
}