
const ExamUserModel = require("../models/ExamUser");
const BaseResponse = require("../utils/baseResponse");

exports.create = async (req,res,next)=>{
    try {
        const body = req.body;
        const user = ExamUserModel(body);
        await ExamUserModel.create(user);

        res.status(200).json(BaseResponse(false,"Kullanıcı kayıt işlemi başarılı."))

    } catch (error) {
        res.status(400).json(BaseResponse(true,undefined,error.message))
    }
    

}