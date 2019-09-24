/**
 * React.PureComponent 重写了shouldComponentUpdate方法，当组件更新时，如果props和state都没发生变化，则render方法不会触发，省去了virtual dom的对比和生成过程，达到性能优化的目的
 */