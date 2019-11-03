import {observable } from 'mobx'

var str = observable.box('str')
var num = observable.box(20)
var bool = observable.box(false)

console.log(str.get())
console.log(num.get())
