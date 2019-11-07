/*
    实现继承的几种方式：
        原型继承
        构造函数继承
        实例继承
        拷贝继承
        组合继承
        寄生式组合继承
        class继承
*/
// 原型继承- 缺陷：原型对象是共享的，无法向父类实例传参，无法多继承
// function Person(name) {
//     this.name = name;
// }
// function Child(){}
// Child.prototype = new Person()

// 构造函数继承 - 缺陷：每个子类中都包含一个父类函数性能不好，实例只是子类的实例不是父类的实例，因而没有继承父类的原型属性和方法
// function Person(name) {
//     this.name = name;
// }
// function Child(name) {
//     Person.call(this,name)
// }

// 实例继承 - 缺陷：实例是父类的实例不是子类的实例，不支持多继承
// function Person(name) {
//     this.name=name
// }
// function Child(name) {
//     var instance = new Person(name);
//     instance.age = 2
//     return instance;
// }

// 拷贝继承 - 缺陷：无法继承父类不可枚举属性，性能低。实例只是子类的实例，不是父类的实例
// function Parent(){}
// function Child() {
//     var parent = new Parent()
//     for (let key in parent) {
//         Child.prototype[key] = parent[key]
//     }
// }

// 组合式继承 - 缺陷：调用两次父类，生成两分实例
// function Parent(){}
// function Child() {
//     Parent.call(this)
// }
// Child.prototype = new Parent()
// Child.prototype.constractor = Child;

// 寄生组合继承

// function Parent(){}
// function Child() {
//     Parent.call(this)
// }
// Child.prototype = Object.create(Parent.create, {
//     constructor: Child,
//     enumerable: false,
//     writable: true,
//     configurable: true
// })

// ES6继承
class Parent{}
class Child extends Parent{
    constructor() {
        super()
    }
}