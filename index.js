// 简单建一个类似的Vue
function vue(){
    this.$data = {a:1}
    this.el = document.getElementById('app')
    this.virtualdom = ""
    this.observer(this.$data)
    this.render()
}
vue.prototype.observer = function(obj){
    var self = this;
    var value;
    for(var key in obj){
        value = obj[key]
        if(typeof value ==='object'){
            this.observer(value)
        }else{
            Object.defineProperty(this.$data,key,{
                get:function(){
                    // 进行依赖收集 dep.depend()
                    return value
                },
                set:function(newVal){
                    // 触发视图更新 源码中dep.notify()
                    value = newVal
                    self.render()
                }
            })
        }
    }
}


