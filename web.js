var express = require('express');
var path = require('path');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    var fs = require('fs');
    var buf = new Buffer(fs.readFileSync('index.html'));
    response.send(buf.toString('utf-8'));
});

app.use("/public",express.static(path.join(__dirname, '/public')));

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
