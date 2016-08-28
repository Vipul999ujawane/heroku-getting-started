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
  res.send(yolo);
})

app.get ('/randompic',function(req,res){
  res.redirect('http://loremflickr.com/320/240');
})

app.get('/randomarticle',function(req,res){
  res.redirect('http://en.wikipedia.org/wiki/Special:Random',301);
})
 
app.get ('/multiply',function(req,res){
  var m1= req.param('m1');
  var m2=req.param('m2');
  var m3=req.param('m3');
  result=m1*m2*m3;
  res.json ({"error":"null","inputs":[m1,m2,m3],"result":result})
})

app.get('/', function(request, response) {
  response.render('pages/index');
})

app.get ('*',function(req,res){
  res.send(404);
})

;

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


