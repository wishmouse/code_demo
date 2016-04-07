var h = require('hyperscript')

function hyperscript(obj) {
  var name = obj
  var domElement =
  h('div#page',
    h('div#header',
      h('h1.classy', "EDA: The Roster", { style: {'background-color': '#22f'} })
    ),
    h('div#menu', { style: {'background-color': '#2f2'} }),
    h('h2', 'EDA Students',  { style: {'background-color': '#f22'} }),
    obj.students.map(function(x){
      return h('p', x.name,
              h('img', {'src': x.pic}))
    })
    // h('img', {'src':' http://www.nasa.gov/sites/default/files/iss_1_0.jpg'})
    // h('p',
    //   "the intension is for this to be used to create\n",
    //   "reusable, interactive html widgets. "
    // )
  )

  return domElement
}

module.exports = hyperscript
