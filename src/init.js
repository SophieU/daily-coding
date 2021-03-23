const download = require('download-git-repo')
const tmpAdd = require('../template.json').admin
console.log(111)
download(`direct:${tmpAdd}`, 'my-app',{clone: true}, err=>{
    console.log(err)
})
