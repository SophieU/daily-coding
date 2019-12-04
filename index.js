Function.prototype.myCall = function (context) {
    if (typeof this !== 'function') {
        throw new Error('not a function')
    }
    let args = arguments.slice(1);
    context.fn = this;
    var res = context.fn(...args)
    delete context.fn;
    return res;
}
Function.prototype.myApply = function (context) {
    if (typeof this !== 'function') {
        throw new Error('not a function')
    }
    let args = arguments.slice(1);
    context.fn = this;
    var res;
    if (!arguments[1]) {
        res = context.fn();
    } else {
        res = context.fn(...arguments[1])
    }
    return res;
}
Function.prototype.myBind = function (context) {
    if (typeof this !== 'function') {
        throw new Error('not a function')
    }
    context = context || window;
    let argsInner = Array.prototype.slice.call(arguments, 1);
    const self = this;
    const nop = function () { }
    const bound = function () {
        return self.apply(
            this instanceof nop ? this : context,
            argsInner.concat(Array.from(arguments))
        )
    }
    if (this.prototype) {
        nop.prototype = this.prototype;
    }
    bound.prototype = new nop();
    return bound;
}