var http=require('http');
var url=require('url');

function startserver(route,handle){
    function onRequest(request,response){
        var pathname = url.parse(request.url).pathname;
        console.log("Request recieved for " + pathname);
        route(handle,pathname,response)
        // response.writeHead(200,{"Content-Type":"text/plain"});
        // response.write("Hello from server!");
        // response.end();
    }
    http.createServer(onRequest).listen(3000);
    console.log("Server started on local port 3000");
}
exports.startserver = startserver;