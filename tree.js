/**
 * 内置类型：
 * 基本类型：string,number,boolean,undefined,null,symbol
 * 引用类型: object
 * 六个为false的值：
 * false,0,'',undefined,null,NaN
 * 
 * 类型转换：valueOf->toString->toPrimitive
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

