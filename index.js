const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;

var buzzwordArray = [];
var newScore = '';

app.use(bodyParser.urlencoded({extended: false }));

app.get('/', express.static('public'));

app.get('/buzzwords', function (req, res){
  res.send({"buzzwords": buzzwordArray});
});

app.post('/buzzword', function (req, res) {
  if (buzzwordArray.push(req.body)){
    res.send({"success": true});
    console.log(buzzwordArray);
  }
  else {
    res.send({"success": false});
  }
});

app.put('/buzzword', function (req, res) {
  for (var i = 0; i < buzzwordArray.length; i++){
    if(req.body.buzzWord === buzzwordArray[i].buzzWord){
      buzzwordArray[i].heard = true;
      newScore = Number(newScore) + Number(buzzwordArray[i].points);
      res.send({"success": true, "newScore": newScore});
      return true;
    }
  }
  console.log(buzzwordArray);
});

app.delete('/buzzword', function (req, res) {
  for (var i = 0; i < buzzwordArray.length; i++){
    if(req.body.buzzWord === buzzwordArray[i].buzzWord){
      buzzwordArray.splice(i, 1);
      res.send({"success": true});
    }
  }
  console.log(buzzwordArray);
});

var server = app.listen(PORT, () => {
  var localhost = server.address().address;
  var port = server.address().port;

  console.log('PORT:', port);
});