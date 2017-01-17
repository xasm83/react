var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var serveStatic = require('serve-static');

app.use(bodyParser.json());
app.use(serveStatic('client'));

var getHandler = function (req, res) {
  	res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(req.params.postId));
}

app.get('/api/posts/:postId', getHandler);
var server = app.listen(3030, function () {
    var host = server.address().address;
    var port = server.address().port;
});