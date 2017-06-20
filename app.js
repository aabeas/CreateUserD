const express = require('express');
const path = require('path');
const data = require('./data');
const mustacheExpress = require('mustache-express');
const app = express();

app.engine('mustache', mustacheExpress());
app.set('views', './views')
app.set('view engine', 'mustache')
app.use(express.static(__dirname + '/public'))

app.get('/', function(req, res) {
  res.render("userDirectory",{users: data.users})
})

app.listen(3000, function () {
  console.log('Successfully started express application!');
})
