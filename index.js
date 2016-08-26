var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/reverse/:TEXT',function(req,res){
  var n= req.params.TEXT.length;
  var yolo=""
  var i=0;
  for (i=n-1; i>=0;i--)
  {
    yolo+=req.params.TEXT[i];
  }
  res.send(req.params.TEXT);
})

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


