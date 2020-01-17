## SSR怎么做？？

特性：
1. 每次访问都会创建一个新的Vue实例
2. 只会触发组件的beforeCreate和created钩子，所以需要客户端JS

## 核心库
Vue、Vue-server-render
## 设计模式
状态模式，策略模式，享元模式