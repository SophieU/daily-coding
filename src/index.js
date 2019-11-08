/*
实现继承的几种方式（7种）： 原型继承，构造函数继承，拷贝继承，实例继承，组合继承，寄生组合继承，Class继承
*/
// 原型继承
function Parent (name){
    this.name=name;
}
function Child(){
}
Child.prototype = new Parent()
