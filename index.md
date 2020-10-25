# 如何封闭自己的js库？
> 举例：封装一个类似于jQuery的库。要求：1、不依赖其他的库，2、只通过特定的入口才能访问
1. 如何解决内存占用问题？同一个函数被声明多次
```js
 (function(global){
    function Libary(selector){
        var element = document.getElementsByTagName(selector)
        element.css = function(){
            console.log('just so so')
        }
        return element
    }
    global.$ = global.Libary = Libary
})(window)

```
