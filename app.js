var connect = require('connect');
var serveStatic = require('serve-static');
var morgan = require('morgan');
var port = process.env.PORT;

var app = connect();


app.use(morgan('dev'));
app.use(serveStatic('./'));

app.listen(port);
console.log('Node listening on port ' + port);