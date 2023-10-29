import express, { query } from "express";
const router = express.Router();

router.get("/", function(req,res){

    // let page = req.query.page;
    // console.log("[QUERY]")
    // console.log(page);

    // res.send({"Key":"Value"});

    res.render('index', {title:"EJS 메인페이지"});
    // 그림판을 전달할 때는 render, render는 항상 views 폴더를 바라보고 있음, title 서버 사이드
})
// get방식의 api를 만듦

router.get("/about", function(req,res){
    res.send('About Page');
})

router.post("/postapi", function(req,res){

    let body = req.body;
    console.log(body);

    res.send('POST API');
})

//module.exports = router
export default router;
