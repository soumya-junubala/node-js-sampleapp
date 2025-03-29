var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
  response.send('Hello World!');
});

// Update to listen on all network interfaces (0.0.0.0)
app.listen(app.get('port'), '0.0.0.0', function() {
  console.log("Node app is running at http://0.0.0.0:" + app.get('port'));
});
