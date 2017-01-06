const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;

var buzzwordArray = [];
var newScore = '';

app.use(bodyParser.urlencoded({extended: false }));

app.use('/', express.static('public'));

app.get('/buzzwords', function (req, res){
  res.json({"buzzwords": buzzwordArray});
});

app.post('/buzzword', function (req, res) {
    buzzwordArray.push(req.body);
    res.json({"success": true});
    console.log(buzzwordArray);
});

app.put('/buzzword', function (req, res) {
  var response = {"success": false};
  for (var i = 0; i < buzzwordArray.length; i++){
    if(req.body.buzzWord === buzzwordArray[i].buzzWord){
      buzzwordArray[i].heard = true;
      newScore = Number(newScore) + Number(buzzwordArray[i].points);
      response = {"success": true, "newScore": newScore};
    }
  }
  res.json(response);
});

app.delete('/buzzword', function (req, res) {
  var response = {"success": false};
  for (var i = 0; i < buzzwordArray.length; i++){
    if(req.body.buzzWord === buzzwordArray[i].buzzWord){
      buzzwordArray.splice(i, 1);
      response = {"success": true};
    }
  }
  res.json(response);
});

var server = app.listen(PORT, () => {
  var localhost = server.address().address;
  var port = server.address().port;

  console.log('PORT:', port);
});