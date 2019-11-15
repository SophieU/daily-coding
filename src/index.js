/**
 * 继承的几种实现方法：原型继承，构造函数继承，拷贝继承，实例继承，组合继承，寄生组合继承，ES6继承
 * 原型继承 ： Child.prototype = new Parent()
 * 构造函数继承： Parent.call(this)
 * 拷贝继承： Child.prototype[key] = Parent[key]
 * 实例继承：var instance = new Parent() return instance
 * 组合继承：Child.prototype = new Parent() Parent.call(this)
 * 寄生组合继承： Child.prototype = Object.create(Parent.prototype,{contractor:Child,enumberable:false,configurable:true,writable:true})
 * 
 */