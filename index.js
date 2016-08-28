var express = require('express');
var app = express();
app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/reverse/:TEXT',function(req,res){
  
  res.send(req.params.TEXT.reverse);
})



app.get('/randomarticle',function(req,res){
  res.redirect('http://en.wikipedia.org/wiki/Special:Random',301);
})
 
app.get ('/multiply',function(req,res){
  var array=[];
  array.push(req.param('m1'));
  array.push(req.param('m2'));
  array.push(req.param('m3'));
  array.push(req.param('m4'));
  array.push(req.param('m5'));
  array.push(req.param('m6'));
  array.push(req.param('m7'));
  array.push(req.param('m8'));
  array.push(req.param('m9'));
  array.push(req.param('m10'));
  array.push(req.param('m11'));
  array.push(req.param('m12'));
  array.push(req.param('m13'));
  array.push(req.param('m14'));
  array.push(req.param('m15'));
  array.push(req.param('m16'));
  array.push(req.param('m17'));
  array.push(req.param('m18'));
  array.push(req.param('m19'));
  array.push(req.param('m20'));
  var i=0;
  var result=1;
  var arr2=[]
  for (i=0; i<array.length; i++)
  {
    if (array[i]!=null)
    {
      result*=array[i];
    }
  }
  for (i=0; i<array.length;i++)
  {
    if (array[i]!=null)
    {
      arr2.push(array[i]);
    }
  }
  res.json ({"error":"null","inputs":arr2,"result":result})
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


