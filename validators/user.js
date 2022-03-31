const { check, validationResult } = require("express-validator");
const UserModel = require("../models/ExamUser")

exports.validateRegister = [
  check("NameSurname")
    .exists().withMessage('Ad Soyad bilgisi bulunamadı.')
    .isString().withMessage('Ad Soyad bilgisi tipi string olmalıdır.')
    .notEmpty().withMessage('Ad Soyad bilgisi boş olamaz.')
    .isLength({ min: 6, max: 20 }).withMessage('Ad Soyad uzunluğu 6-20 karakter arasında olmalıdır.'),
  check("Email")
    .exists().withMessage('Email bilgisi bulunamadı.')
    .isString().withMessage('Email bilgisi tipi string olmalıdır.')
    .notEmpty().withMessage('Email bilgisi  boş olamaz.')
    .isLength({ min: 6, max: 30 }).withMessage('Email 6-30 uzunluğu karakter arası olmalıdır.')
    .isEmail().withMessage('Email bilgisi tipi email tipinde olmalıdır.')
    .custom(value=>{
        return UserModel.findOne({ Email:value})
        .then(user=>{
            if (user) {
                return Promise.reject('Bu email kullanılmaktadır.'); 
            }else{
                return Promise.resolve();
            }
            
        })
    }),
  check("Phone")
    .exists().withMessage('Phone bilgisi bulunamadı.')
    .isString().withMessage('Phone bilgisi tipi string olmalıdır.')
    .notEmpty().withMessage(' Phone bilgisi tipi boş olamaz.')
    .isLength({ min: 11, max: 11 }).withMessage('Telefon numarası 11 haneli olmalıdır.'),
    
  check("WorkingPosition")
    .exists().withMessage('Çalışılan poziston bilgisi bulunamadı.')
    .isString().withMessage('Çalışılan pozisoyon bilgisi string olmalıdır.')
    .notEmpty().withMessage('Çalışılan pozisyon bilgisi boş olamaz.')
    
    .custom((value,{req})=>{
        if (value === 'Çalışmıyor') {
            if(req.body.WorkingIndustry){
                throw new Error("Çalışılan sektör boş olmalıdır.");
            }
        }
        else{
            if (!req.body.WorkingIndustry) {
                throw new Error("Çalışılan sektör dolu olmalıdır.")
            }

        }
        return true;
        })
            
        

    
];

exports.valdiateRegisterStatus = (req, res, next) => {
  const errors = validationResult(req);
  console.log("HATA",errors)
  if (!errors.isEmpty()) {
    return res.status(400).json(errors);
  } else {
    next();
  }
};