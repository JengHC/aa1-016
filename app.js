//app.js
var express = require("express");
var app = express();
var port = 3000;
//routing(라우팅은 어플리케이션 엔드포인트(URI)의 정의, 그리고 URI가 클라이언트 요청에 응답하는 방식)
app.get("/",function(req, res){
    res.send('<a href="/hello">Hello page</a>');
});
app.get("/hello",function(req, res){
    res.send("Hello aa16!");
});
app.get("/comsi",function(req, res){
    res.send("Hello Comsi");
});
app.get("/aa16",function(req,res){
    res.send("Hello aa16!, Comsi! My first express server!!");
});
app.get("/naver",function(req,res){
    res.send('<a href="http://www.naver.com">Go to naver</a>');
});

//listening requests form clients
var server = app.listen(port,function (){
    console.log("Listening on port %d", server.address().port);
});