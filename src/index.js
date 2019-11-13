Function.prototype.myBind = function(context){
    if(typeof this !== 'function'){
        return ;
    }
    var _self = this;
    var args = Array.prototype.slice.call(arguments,1)
    return function F(){
        _self.apply(context,args.concat(Array.prototype.slice.call(arguments)))
    }
}