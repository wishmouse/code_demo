var hyperscript = require('./hyperscript')
var get = require('simple-get')


get.concat('http://localhost:3000/api/v1/students', function (err,res,data){
  if (err) throw err
  var obj = JSON.parse(data);
  var content = hyperscript(obj);
  document.body.appendChild(content);
})

