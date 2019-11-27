Function.prototype.myCall = function (context) {
    context = context || window;
    let args = Array.prototype.slice.call(arguments, 1);
    context.fn = this;
    var res = context.fn(...args);
    delete context.fn;
    return res;
}
Function.prototype.myApply = function (context) {
    context = context || window;
    let args = Array.prototype.slice.call(arguments, 1)
    context.fn = this;
    let res;
    if (args.length > 0) {
        res= context.fn(...args)
    } else {
        res = context.fn();
    }
    delete context.fn;
    return res;
}