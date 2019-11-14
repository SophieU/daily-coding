Function.prototype.myBind = function(context){
    if(typeof this !=='function'){
        return;
    }
    let args = Array.prototype.slice.call(arguments,1);
    let fn = this;
    return function F(){
        let argsInner = Array.from(arguments)
        // 检测new
        var _this  = this instanceof F ? this : context;
       fn.apply(_this,args.concat(argsInner))
    }
}
Function.prototype.myBind2 = function (context) {
    if (typeof this !== 'function') {
      throw new TypeError('Error')
    }
    var _this = this
    var args = [...arguments].slice(1)
    // 返回一个函数
    return function F() {
      // 因为返回了一个函数，我们可以 new F()，所以需要判断
      if (this instanceof F) {
          console.log('---------')
          console.log(this instanceof F)
        return new _this(...args, ...arguments)
      }
      return _this.apply(context, args.concat(...arguments))
    }
  }

  function test(){
      console.log(this.name)
  }
  var obj = {
      name:'helloU'
  }
  var test2 = test.myBind2(obj);
  console.log(111)
var xxx = new test2();
