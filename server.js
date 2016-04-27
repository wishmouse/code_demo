var express = require('express')
var app = express()
var path = require('path')

app.use(express.static('client'))
var dreamTeam = {students: [{name: "gingernut", id: 0}]}

// app.get('/', function (req,res){
//   res.sendFile(path.join(__dirname+ '/client/index.html'))
// })
app.get('/api/v1/students', function (req,res){
  res.json(dreamTeam)
})

app.get('/api/v1/students/:id', function (req,res){
  res.json(dreamTeam.students[req.params.id].name)
})

app.listen(3000, function(){
  console.log("Listening on port 3000")
})
