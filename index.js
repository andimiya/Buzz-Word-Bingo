const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;

var buzzwordArray = [];
var newScore = '';

console.log(buzzwordArray);

app.use(bodyParser.urlencoded({extended: false }));

app.get('/', express.static('public'));

app.get('/buzzwords', function (req, res){
  res.send({"buzzwords": buzzwordArray});
});

app.post('/buzzword', function (req, res) {
  buzzwordArray.push(req.body);
  if (res.send(buzzwordArray) ){
    console.log({"success": true});
  }
  else {
    console.log({"success": false});
  }

});

app.put('/buzzword', function (req, res) {
  for (var i = 0; i < buzzwordArray.length; i++){
    if(req.body.buzzWord === buzzwordArray[i].buzzWord){
      buzzwordArray[i].heard = true;
      newScore = Number(newScore) + Number(buzzwordArray[i].points);
      console.log({"success": true, "newScore": newScore});
    }
  }
  res.send(buzzwordArray);
});

var server = app.listen(PORT, () => {
  var localhost = server.address().address;
  var port = server.address().port;

  console.log('PORT:', port);
});