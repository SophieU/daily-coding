1. 概述最近一个前端项目整体架构的设计，如模块的划分，技术的选型等，并说明原因（比如三方库引入的目的和结果）。
    最近一个项目“天富缴费小程序”，初期计划只是上微信端，但考虑到后期可能有多端适配的需求，所以采用uni-app+vue的技术栈进行项目开发。
    代码层面：以统一的“web前端开发规范文档”为标准。
    模块划分：大体以产品需求模块作为依据，结合各组件中的公共部分抽象出公共组件模块，对于数据请求的封装等
    技术选型：uni-app+vue，vuex作为全局状态管理，引入uni-request(基于promise封装的ajax请求包)用于替代小程序原生的函数调用式请求方式，方便做全局请求管理

2. 选取其中一个业务模块，简述数据结构的设计和状态的流转，及组件的拆分与实现。
    以首页为例，整体分为banner，navigator区，石城动态模块，全民信息，通知公告区。banner及动态，公告均以数据展示为主
    组件拆分根据实现复用情况或者组件功能复杂度来看，实现上就是简单的组件拆分。

3. 团队的技术栈 https://github.com/querycap/reactorx，简单说说自己的理解
    基于RxJS的React技术栈，看起来很不错，平时没接触过，reactorx整体从@reactorx/core（基于redux封装的状态管理包），@reactorx/persister，@reactorx/router,@reactorx/request（基于axios）， @reactorx/form（类似redux-form)