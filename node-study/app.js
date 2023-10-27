const express = require('express');
const app = express();
// express 선언

app.get("/", function(req,res){
    res.send('Hello World');
})
// get방식의 api를 만듦

app.get("/about", function(req,res){
    res.send('About Page');
})

app.listen(3000, function(req,res){
    console.log("서버가 실행되고 있다!");
})