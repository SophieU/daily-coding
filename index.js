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
//读取视图模板，生成AST语法树
vue.prototype.render = function(){
    this.virtualdom = 'i am ' +this.$data.a;
    this.el.innerHTML = this.virtualdom
}

var obj = {a:111,b:222}
var obj1 = new Proxy(obj,{
    /**
     * 
     * @param {object} target
     * @param {string} key    监听的对象属性名
     * @param {object} receiver  生成的proxy实例本身
     */
    get:function(target,key,receiver){
        // Reflect.get是在proxy中可以直接使用的方法
        return Reflect.get(target,key)
    },
    set:function(target,key,value,receiver){
        return Reflect.set(target,key,value)
    }
})