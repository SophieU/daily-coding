/**
 * beforeCreate: 初始阶段，组件data和$el都还是undefined，未初始化
 * created：data 初始化完成可以访问，$el未进行初始化
 * beforeMount： $el完成初始化，首次调用render函数，将data与template结合生成HTML，但并未挂载到真实DOM
 * mounted：将上一步生成的HTML挂载到真实DOM中，可以访问组件data，也可以获取DOM
 * beforeUpdate：组件更新前，在这里可以做一些校验来避免无意义更新
 * updated：组件更新后，这里可以通过调用 vm.$nextTick()方法来在DOM更新后调用回调
 * beforeDestoryed ： 组件销毁前，此明还可以访问data,
 * destoryed：组件销毁后，可用于卸载事件等
 * 
 */