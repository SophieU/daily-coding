function myCall(context){
    context = context || window
    fn = this;
    var arg = [...arguments].slice(1)
    var res = context.fn(...args)
    delete context.fn;
    return res;
}
function myApply(context){
    context = context || window
    fn = this
    var res ;
    if(arguments[1]){
        res = context.fn(...arguments[1])
    }else {
        res = context.fn()
    }
    delete context.fn;
    return res
}
Function.prototype.myBind = function (context) {
    if (typeof this !== 'function') {
      throw new TypeError('Error')
    }
    var _this = this
    var args = [...arguments].slice(1)
    // 返回一个函数
    return function F() {
      // 因为返回了一个函数，我们可以 new F()，所以需要判断
      if (this instanceof F) {
        return new _this(...args, ...arguments)
      }
      return _this.apply(context, args.concat(...arguments))
    }
  }
  function test(){
      console.log(this.a)
  }
