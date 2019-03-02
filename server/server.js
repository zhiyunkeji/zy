const mysql=require ("mysql");
const http = require("http");
const io = require("socket.io");

let db=mysql.createPool({host:"localhost",user:"root",password:"",database:"zy"});
const httpServer = http.createServer();
httpServer.listen(8080);

const wsServer = io.listen(httpServer);

wsServer.on("connection",sock=>{
    sock.on('a',(n1)=>{
        console.log(n1);
    })
})



db.query("select * from vip",(err,data)=>{
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
    
})