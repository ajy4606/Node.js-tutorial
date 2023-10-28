import express from "express";
import helmet from "helmet";
import ejs from "ejs";
//cont express = require('express');
//const helmet = require('helmet');

// express 선언
const app = express();

//html 설정
app.set('view engine', ejs);
app.set('view', './views');

//css 설정
app.use('/public', express.static(__dirname+'/public'));

app.use(helmet());
// 항상 규칙은 미들웨어에서 app.use로 설정
// post 방식의 api를 서버에서 활용할 수 있는 코드
app.use(express.json());
app.use(express.urlencoded());

//const mainRouter = require('./router/mainRouter');
//미들웨어에서 주소를 입력해 /class101 요청과 응답 사이에 규칙을 설정하고 알려줄 수 있음. app.use 안에 넣을 수 있음
import mainRouter from "./router/mainRouter.js";
app.use('/',mainRouter);

app.listen(3000, function(req,res){
    console.log("서버가 실행되고 있다!");
})