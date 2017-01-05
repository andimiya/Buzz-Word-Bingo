const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;

var buzzwordArray = [];

console.log(buzzwordArray);

app.use(bodyParser.urlencoded({extended: false }));

app.get('/', express.static('public'));

app.get('/buzzwords', function (req, res){
  res.send({"buzzwords": buzzwordArray});
});

app.post('/buzzword', function (req, res) {
  buzzwordArray.push(req.body);
  res.send(buzzwordArray);
  // console.log({"success": true});
});

app.put('/buzzword', function (req, res) {
  buzzWord = req.body.buzzWord;
  var heard = true;
  res.send(req.body);
  // console.log({"success": true, newScore: Number});
});

var server = app.listen(PORT, () => {
  var localhost = server.address().address;
  var port = server.address().port;

  console.log('PORT:', port);
});