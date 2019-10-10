// var weather=require('./weather.js')
// var location=require('./location.js')
// var argv=require('yargs')
// .option('location',{
//     alias:'l',
//     type:'string'
// }).help('help').argv

//  location(function(location){
//      weather(location.city,function(callback){
//          console.log(callback)
//      })
//  })


//  weather(argv.l,function(callback){
//      console.log(callback)

//  })

var http = require('http'); //module required
/*
http.createServer(function(request,response) {
    response.writeHead(200); //status code in header
    response.write("Hello, this is dog!"); //response body
    response.end(); //close con
}).listen(8080); //listen on this port

console.log('Listening on port 8080...')
*/
/* running process */
http.createServer(function(request,response) {
    response.writeHead(200); //status code in header
    response.write("Dog is running!"); //response body
    setTimeout(function(){ //second event
        response.write("Dog is done");
        response.end(); //close con
    },5000); 
}).listen(8080); //listen on this port

console.log('Listening on port 8080...')