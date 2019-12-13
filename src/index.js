Function.prototype.myBind = function () {
    if (typeof this !== 'function') {
        return;
    }
    var context = [].shift.call(arguments);
    var args = arguments;
    var fn = this;
    return function F() {
        var _this = this instanceof fn ? this : context;
        var argsInner = args.concat(Array.from(arguments));
        return fn.apply(_this,argsInner)
    }
}

console.log( [].toString())