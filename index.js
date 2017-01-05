const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;

var buzzwordArray = [];

app.use(bodyParser.urlencoded({extended: false }));

app.get('/', express.static('public'));

app.get('/buzzwords', function (req, res){
  res.send({"buzzwords": buzzwordArray});
});

app.post('/buzzword', function (req, res) {
  var buzzWord = req.body.buzzWord;
  var points = req.body.points;
  res.send({"buzzWord": buzzWord, "points": points});
});

var server = app.listen(PORT, () => {
  var localhost = server.address().address;
  var port = server.address().port;

  console.log('PORT:', port);
});