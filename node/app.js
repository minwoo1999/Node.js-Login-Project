const express=require('express');
const app=express();
var bodyParser = require('body-parser') //form 으로 전송할때 json 형식으로

app.use(express.urlencoded({extended : true}));
app.use(bodyParser.json())
app.use('/css', express.static(__dirname+'/css')); 
app.unsubscribe(express.json());



const User = require('./dbConnection.js'); //스키마 생성 및 DB설정


    

 



app.get('/join',function(req,res){
    res.sendFile(__dirname+"/html/join.html");
});

app.get('/',function(req,res){
    res.sendFile(__dirname+"/html/login.html");
})

app.post('/doJoin',function(req,res){

  let Users=new User();
  Users.id=req.body.id;
  Users.pass=req.body.pass;
  Users.nickname=req.body.nickname;
  Users.email=req.body.email;
  Users.phone=req.body.phone;
  Users.name=req.body.name;

  if (Users.id==='' || Users.pass===null){ //유효성 검사

    res.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8'
    });

    res.write("<script>alert('회원가입 실패')</script>");
    res.write('<script>location.href = "/"</script>');
  }

  Users.save()
  .then((user)=>{
    console.log(user);res.sendFile(__dirname+"/html/login.html");})
    .catch((err)=>{console.log(err);})
  
    console.log("저장성공");
  
})


app.listen(8080,function(){

    console.log('listing 8080');
});