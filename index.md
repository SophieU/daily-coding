## 性能优化方向及分类
- 请求数量：减少http请求，用CSS Spirit图，合并JS，CSS
- 请求带宽：压缩资源，开启Gzip，移除重复代码，图片优化，TreeShaking
- 缓存利用： CDN，减少DNS查找（预解析）添加Expire头，Cache-Control,Etag
- 页面结构：CSS头部，JS底部
- 代码校验：少用CSS表达式


