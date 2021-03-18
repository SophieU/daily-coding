#! /usr/bin/env node

const program = require('commander')
const version = require('../package.json').version;

// 定义当前版本
program.version(version, "-v, --version")

// 定义使用方法
program
    .command("create <app-name>")
    .description("使用my-cli创建一个新的项目")
    .action(()=>{
        require('../src/init')
    })

program
    .command("list")
    .description("可用模板列表")
    .action(()=>{
        require('../src/list')
    })


program.parse(process.argv)
if(!program.args.length){
    program.help()
}