const express = require("express");
const app = express();
const {PORT,DB_CONFIG} = require("./config/config");
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const morgan = require("morgan");
const QuestionRouter = require("./routes/question")

mongoose.connect(
  `mongodb+srv://${DB_CONFIG.USERNAME}:${DB_CONFIG.PASSWORD}@mindsetexam.houxo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
  { useNewUrlParser: true }
);

mongoose.Promise = global.Promise;


app.use(bodyParser.json());
app.use(morgan("dev"));


app.use("/question", QuestionRouter);
app.use((error,req,res,next) => {
    res.status(error.status || 500);
    res.json({
        error:{
                message:error.message          //diger hatalar
        }
    });
  });

// app.use("/",(req,res,next) =>{
//     res.json({
//         data:"Hoşgeldiniz."
//     });
// });

app.get('/berkay',(req,res)=>{
    res.json("Berkay Reis");
})



app.listen(PORT,(error,result)=>{
    if (error) {
        console.log("Bir hata oluştu.")
    } else{
        console.log(`Proje ${PORT} portu üzerinde çalışıyor.`);
    }
})