const templateLists = require('../template.json')
const chalk = require('chalk')

let showTips = ''
for(let key in templateLists){
    showTips+=`${key}： ${templateLists[key]}\n`
}

console.log(chalk.green(`当前脚手架有如下模板：\n`))
console.log(showTips)


process.exit()
