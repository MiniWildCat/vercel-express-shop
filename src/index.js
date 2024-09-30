const app = require('./server');
var server = app.listen(7001, function() {
    // var host = server.address().address
    var host = 'localhost'
    var port = server.address().port
    console.log("应用实例，访问地址为 http://%s:%s", host, port)
})