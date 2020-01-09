## 性能优化方向及分类
- 请求数量：减少http请求，用CSS Spirit图，合并JS，CSS
- 请求带宽：压缩资源，开启Gzip，移除重复代码，图片优化，TreeShaking
- 缓存利用： CDN，减少DNS查找（预解析）添加Expire头，Cache-Control,Etag
- 页面结构：CSS头部，JS底部
- 代码校验：少用CSS表达式

"{\"sysid\":\"1811011059060727510\",\"sign\":\"nSXGTd1O6rxBtcgLOEkM81FAo3im24/srmwZUFjPx006BV5xQ83XREP4ITxxrvdDsaoOjVNb5OjoctYaZV9nD2iqufgymysUE9IuscdCXdn3ZDi2xkuj0jC7ltGUIp+elCpGKCcHwTDGdCwwJYYm4EAuV4Suv9nV6rJAinOekYw=\",\"signedValue\":\"{\\\"orderNo\\\":\\\"1215094849498259456\\\",\\\"payInfo\\\":{\\\"timeStamp\\\":1578536159,\\\"package\\\":\\\"prepay_id=wx0910152529760009828a5fce1440366300\\\",\\\"paySign\\\":\\\"380B95739A42CF50551990DD7FBA687D\\\",\\\"appId\\\":\\\"wx786f809a2d6aca15\\\",\\\"signType\\\":\\\"MD5\\\",\\\"nonceStr\\\":\\\"8a226fa5f5964d30a93ce7c89f75e1b0\\\",\\\"key\\\":\\\"a78699ab2aea36abf13ddaa445293304\\\"},\\\"bizUserId\\\":\\\"TLT2019120201\\\",\\\"bizOrderNo\\\":\\\"TEST0000202902080001\\\"}\",\"status\":\"OK\"}"

