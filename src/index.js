function Person(name){
  this.name = name
}
function Child(name){
  Person.call(this,name)
}
Child.prototype.say= function(){
  console.log(111)
}

