//what is postman ?
//what is port ?

// using http module (inbuilt given by node) we can setup a basic server
const http = require('http');
const PORT = 3000;
/**
 * Http module contains a function called as createServer
 * this createServer function takes a callback as the input
 * Now inside the callback, we get two arguments
 *  - request -> this argument contains all the details about the incoming req
 *  - response -> this argument contains functions using which we can prepare the responses
 * 
 * the createServer function returns us the server object
 */

const server  =  http.createServer(function exec(req , response){
    if(req.url == '/home'){     // the url help you to see the req you make in url e.g /home etc.
        response.end("home");
    }else if(req.url == '/home2'){
        response.end("home2");
    }else{                  
    response.end("Hello WOrld ");
    }                       // this response object contain some function that we can use in order to send some data 
})                                                      // because we define response now we can print this staement whenever someone make req to our server 

server.listen(PORT, function (){                                 // this callback help you to do something just after the server start 
    console.log("server started on PORT " , PORT);
})

//NOTE - these req and response parameter are so powerful than you can manipulate any req and manupulate any ooutgoing response , everything you can control 
//but there is problem we have to do so many things our self  for e.g we are recieving the req.method(GET,POST ETC) and now for waht method 
//we have to manulally configure it, but without any third party libraray we can setup a basic server we can many more thing with this 
//but what if we use something which is already does so many thing for us already and for that only we gonna talk about express js 
//which going to do same thing we done already in a more simple way. 