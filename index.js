const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;

app.use('/', express.static('public'));


var server = app.listen(PORT, () => {
  var localhost = server.address().address;
  var port = server.address().port;

  console.log('PORT:', port);
});