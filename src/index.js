/*
    实现继承的几种方式：原型继承，构造函数继承，拷贝继承，实例继承，组合继承，寄生组合继承，Class继承 
*/
// 原型继承：子类原型为父类实例, 缺陷：无法继承父类自身属性，子类实例共享同一个原型
// function Parent1(name){
//     this.name = name;
// }
// function Child1(){}
// Child1.prototype = new Parent1;

// 构造函数继承 缺陷：子类实例每次创建都会调用父类实例，实例只是子类实例而不是父类的实例
// function Parent(){}
// function Child(){
//     Parent.call(this)
// }
// var child  = new Child()

// 拷贝继承  子类原型复制父类方法，

console.log(child instanceof Child)
console.log(child instanceof Parent)
