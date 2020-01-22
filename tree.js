/**
 * 内置类型：
 * 基本类型：string,number,boolean,undefined,null,symbol
 * 引用类型: object
 * 六个为false的值：
 * false,0,'',undefined,null,NaN
 * 
 * 类型转换：valueOf->toString->toPrimitive
 * 
 * 每个函数都有一个prototype属性，该属性指向函数的原型对象，而每个对象也都有一个__proto__属性指向了创建该
 * 对象的函数的原型对象prototye
 */

 let a = {
   valueOf(){
     return 0
   },
   toString(){
     return '1'
   },
   [Symbol.toPrimitive](){
     return 2;
   }
 }
 console.log(1+a)
 console.log('1'+a)

