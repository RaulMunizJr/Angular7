var request = require('request');

module.exports = function(location) {
    return new Promise(function(resolve,reject) {
    var el=encodeURIComponent(location)
    var url = `http://api.openweathermap.org/data/2.5/weather?q=${el}&appid=e192d343035ee82aa1e711507c339e26&units=imperial`;
    
    // if(!location){
    //     return reject('no location is found')
    // }
    request({
    url: url,
    json: true
}, function(error, response, body) {
    if(error){
        reject('unable to guess weather')
    } else {
        resolve('It\'s ' + body.main.temp + ' in ' + body.name);
    }
})
})
};


//console.log('After request!');
