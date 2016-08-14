var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname, 'src')));
app.set('root', path.join(__dirname, 'src'));

// app.set(express.static(path.join(__dirname, 'dist')));

app.set('port', 3000);
app.listen(app.get('port'), function(){
  console.log('server runing at http://localhost:'+app.get('port'));
});

