
const express = require('express');
const http_var = require('http');
const uberApiRoute =  require('./apis/ubereatsApis');
const port = process.env.PORT || 3000;
const IP = process.env.IP || "0.0.0.0" ;


  var app = express();
  app.use('/', uberApiRoute);

  app.get('/another', (req, res)=>{
      res.send("some value goes her via main file ");
  });




  var server = http_var.createServer(app);

  server.listen(port, IP , function(){
    console.log("**** Server is Up Now ****" , "PORT:"+port +" and IP="+IP);
});

