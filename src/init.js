const download = require('download-git-repo')
const tmpAdd = require('../template.json').admin
console.log(222)
download(`direct:${tmpAdd}`, 'my-app',{clone: true}, err=>{
    console.log(err)
})
