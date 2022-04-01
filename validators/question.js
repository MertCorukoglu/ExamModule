const { check, validationResult } = require("express-validator");
const QuestionModel = require("../models/question")

exports.validateCreate = [
    check("Title")
        .exists().withMessage('Soru Başlık bilgisi bulunamadı.')
        .isString().withMessage('Soru Başlık bilgisi tipi string olmalıdır.')
        .notEmpty().withMessage('Soru Başlık bilgisi boş olamaz.'),

    check("Content")
        .exists().withMessage('soru bilgisi bulunamadı.')
        .isString().withMessage('Soru bilgisi tipi string olmalıdır.')
        .notEmpty().withMessage('Soru bilgisi boş olamaz.'),

    check("QuestionNo")
        .exists().withMessage('Soru Numarası bilgisi bulunamadı.')
        .isNumeric().withMessage('Soru Numarası tipi string olmalıdır.')
        .notEmpty().withMessage('Soru Numarası boş olamaz.')
        .custom((value)=>{
            console.log("CUSTOM",value);
            return QuestionModel.findOne({ QuestionNo:value})
            .then((question)=>{
                console.log("SORU",question);
                if (question) {
                    return Promise.reject('Soru Numarası kullanılmaktadır.'); 
                }else{
                    return Promise.resolve();
                }
                
            })
        }),

    check("QuestionType")
        .exists().withMessage('Soru Tipi bilgisi bulunamadı.')
        .isNumeric().withMessage('Soru Tipi tipi string olmalıdır.')
        .notEmpty().withMessage('Soru Tipi boş olamaz.')
        .custom((value,{req})=>{
            req.body.Options.forEach((item,index) => {
                if (!(typeof(item.Content) === 'string')) {
                    throw new Error(`${index+1}. Şık Content Tipi yanlış girilmiştir.`)
                }
                if (!(typeof(item.isCorrect) === 'Boolean')) {
                    throw new Error(`${index+1}. Şık isCorrect Tipi yanlış girilmiştir.`)
                }
            });
            



            return true;
        })

    
];
exports.validateCreateStatus = (req, res, next) => {
    const errors = validationResult(req);
    console.log("HATA",errors)
    if (!errors.isEmpty()) {
      return res.status(400).json(errors);
    } else {
      next();
    }
  };
  exports.validateUpdate = [
    check("Title")
        .exists().withMessage('Soru Başlık bilgisi bulunamadı.')
        .isString().withMessage('Soru Başlık bilgisi tipi string olmalıdır.')
        .notEmpty().withMessage('Soru Başlık bilgisi boş olamaz.'),

    check("Content")
        .exists().withMessage('soru bilgisi bulunamadı.')
        .isString().withMessage('Soru bilgisi tipi string olmalıdır.')
        .notEmpty().withMessage('Soru bilgisi boş olamaz.'),

    check("QuestionNo")
        .exists().withMessage('Soru Numarası bilgisi bulunamadı.')
        .isNumeric().withMessage('Soru Numarası tipi string olmalıdır.')
        .notEmpty().withMessage('Soru Numarası boş olamaz.'),

    check("QuestionType")
        .exists().withMessage('Soru Tipi bilgisi bulunamadı.')
        .isNumeric().withMessage('Soru Tipi tipi string olmalıdır.')
        .notEmpty().withMessage('Soru Tipi boş olamaz.')
        .custom((value,{req})=>{
            req.body.Options.forEach((item,index) => {
                if (!(typeof(item.Content) === 'string')) {
                    
                    throw new Error(`${index+1}. Şık Content Tipi yanlış girilmiştir.`)
                }
                if (!(typeof(item.isCorrect) === 'boolean')) {

                console.log("İTEM",typeof(item.isCorrect));
                    throw new Error(`${index+1}. Şık isCorrect Tipi yanlış girilmiştir.`)
                }
            });
            



            return true;
        })

    
];
exports.validateUpdateStatus = (req, res, next) => {
    const errors = validationResult(req);
    console.log("HATA",errors)
    if (!errors.isEmpty()) {
      return res.status(400).json(errors);
    } else {
      next();
    }
  };