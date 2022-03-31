const { check, validationResult } = require("express-validator");
const UserModel = require("../models/ExamUser")

exports.validateRegister = [
  check("NameSurname")
    .exists()
    .isString()
    .notEmpty()
    .isLength({ min: 6, max: 20 }),
  check("Email")
    .exists()
    .isString()
    .notEmpty()
    .isLength({ min: 6, max: 30 })
    .isEmail()
    .custom(value=>{
        return UserModel.findOne({ Email:value})
        .then(user=>{
            if (user) {
                return Promise.reject('E-mail already in use'); 
            }else{
                return Promise.resolve();
            }
            
        })
    }),
  check("Phone")
    .exists()
    .isString()
    .notEmpty()
    .isLength({ min: 11, max: 11 }),
    
  check("WorkingPosition")
    .exists()
    .isString()
    .notEmpty()
    
    .custom((value,{req})=>{
        if (value === 'Çalışmıyor') {
            if(req.body.WorkingIndustry){
                throw new Error("Working Industry boş olmalıdır.");
            }
        }
        else{
            console.log("GİRDİİİİ33");
            if (!req.body.WorkingIndustry) {
                console.log("GİRDİ22");
                throw new Error("Working Industry dolu olmalıdır.")
            }

        }
        return true;
        })
            
        

    
];

exports.valdiateRegisterStatus = (req, res, next) => {
  const errors = validationResult(req);
  console.log("HATA",errors)
  if (!errors.isEmpty()) {
    return res.status(400).json({ message: "Girdiğniz bilgileri kontrol ediniz" });
  } else {
    next();
  }
};