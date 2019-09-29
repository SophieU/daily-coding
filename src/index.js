react 中的props和state的用法？
react组件之间如何 通信？ props 属性函数 redux
为什么虚拟DOM会提高性能？virtualDOM 使用JS对象来描述DOM节点，通过一层虚拟的DOM树与真实DOM树比较，
得到差异化的节点再对应更新差异部分，减少了额外的DOM我操作，达到优化性能的目的
react 生命周期函数 ？
初始化期：
    componentWillMount
    render
    componentDidMount
运行期：
    componentWillRecieveProps
    shouldComponentUpdate
    componentWillUpdate
    render
销毁期：
    componentWillUmmount

react性能优化是哪个周期函数？ shouldComponentUpdate
哪一步发起请求？componentDidMount
React事件处理逻辑？react将将原生事件经过处理成为合成事件（解决了跨浏览器的兼容性问题，不同浏览器对事件绑定的处理不一致），且事件并不是绑定在特定DOM元素上，而是统一
由顶层组件控制，这样在DOM更新时，可以不用担心事件的处理。

如何 告诉React它应该编译生产环境版本？
通过webpack主definePlugin插件设置NODE_ENV为production