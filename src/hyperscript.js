var h = require('hyperscript')

function hyperscript(obj) {
  var name = obj
  var domElement =
  h('div#page',
    h('div#header',
      h('h1.classy', "your favourite biscuit?", { style: {'background-color': 'white'} })
    ),
     obj.students.map(function(x){
      return h('p', x.name)
    })
  )
  return domElement
}

module.exports = hyperscript
