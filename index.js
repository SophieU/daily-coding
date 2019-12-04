function myNew() { 
    // 1. 创建一个对象
    var obj = new Object();
    //  获取外部构造器
    var Constructor = Array.prototype.shift.call(arguments);
    // 2. 实现继承，绑定原型
    obj.__proto__ = Constructor.prototype;
    // 3. 调用构造器，并改变this指向
    var res = Constructor.apply(obj, arguments);
    return typeof res === 'object' ? res : obj;
}