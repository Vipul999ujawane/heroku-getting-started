var express = require('express');
var app = express();
app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/reverse/:TEXT',function(req,res){
  
  res.send(req.params.TEXT.split('').reverse().join(''));
})



app.get('/randomarticle',function(req,res){
  res.redirect('http://en.wikipedia.org/wiki/Special:Random',301);
})
 
app.get ('/multiply',function(req,res){
  var err=null,result=1;
  for (var i in req.query){
    var t1= req.query[i];
    if (t1==NaN)
    {
      err="NaN";
      break;
    }
    if(i>20)
    {
      err="Too much";
    }
    result*=t1;
  }
  final=[]
  for (var i in req.query)
  {
    final.push(req.query[i]);
  }
  res.json ({"error":err,"inputs":final,"result":result})
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


