const express = require('express');
const path = require('path');
const open = require('open');

const PORT = 3000 || process.env.port;
const app = express();

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(PORT, function(err){
  if(err) throw err;
  open('http://localhost:' + PORT);
});



