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

// app.get('/:id', function(req, res) {
//   const id = req.params.id
//   const user = data.user[id-1]
//   res.render("userProfile",{users: user})
// })

app.get('/userProfile/:id', function(req, res) {
  const id = req.params.id
  const user = data.users[id-1]
  res.render("userProfile",{users: user})
  // res.send("Why is this not posting!!!")
})

app.listen(3000, function() {
  console.log('Successfully started express application!');
})
