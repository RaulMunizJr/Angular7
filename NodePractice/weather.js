var request = require('request');

module.exports = function(location, callback) {
    var el=encodeURIComponent(location)
    var url = `http://api.openweathermap.org/data/2.5/weather?q=${el}&appid=e192d343035ee82aa1e711507c339e26&units=imperial`;
request({
    url: url,
    json: true
}, function(error, response, body) {
    if(error){
        callback('Unable to fetch weather.')
    } else {
        callback('It\'s ' + body.main.temp + ' in ' + body.name + '!');
    }
});
}
//console.log('After request!');