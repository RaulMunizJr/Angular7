function home(response){
    console.log('executing home handler')
    var htmlFile = ' <h1>HOME</h1> <h2>I can be placed in a separte file as well..</h2>';
;
    response.writeHead(200,{"Content-Type":"text/html"});
    response.write(htmlFile);
    response.end();

}

function review(){
    console.log('executing review handler')
}

exports.home=home;
exports.review=review;