var hyperscript = require('./hyperscript')  //all of this is run on the indes.html file because that is the file that this js is called within
var get = require('simple-get')
//document.getElementById('test').innerHTML = 'It is Working!'
//var dreamTeam = {students: [{name: "RaRa"}, {name: "Andrew 'Fresh Prince of Mince'"}, {name: "James 'Ahh Yea' S"}]}

get.concat('http://localhost:3000/api/v1/students', function (err,res,data){
  if (err) throw err
  var obj = JSON.parse(data);
  obj= JSON.stringify(obj);
  var content = hyperscript(JSON.parse(obj));
  document.body.appendChild(content);
})
