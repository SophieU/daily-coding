[toc]

## 引言
> 公司项目在前期开发时忙于赶工期而忽略了对团队开发规范的制定，以至于成员在各项目中流动时接手的时间拉长，开发风格也各有不同，维护起来相对麻烦。于是，近期开始着手一步步规范化团队，从技术文档，开发规范，前端自动化工程构建等一步步的实现。

## HTML规范
### 页面头部
#### DOCTYPE设置
文档类型统一使用html5的doctype：
```html
<!DOCTYPE html>
```
#### 脚本加载
- js放下面，CSS放上面
- 对于只需要兼容ie10+或只在移动端访问的项目，可以对script添加`async`属性放在`<head>`内
### HTML标签
- HTML标签尽量使用`语义化`标签来代替原来的`class命名`
- 除非有特定的功能、组件要求等，禁止随意使用id来定义元素样式
- 标签的自定义属性以`data-`开头
#### 链接
- 给 `<a> `标签加上title属性
- `<a>`标签的href属性必须写上链接地址，暂无的加上`javascript:void(0)`
#### img标签alt属性不为空
- `<img>`标签的 alt 属性指定了替代文本，用于在图像无法显示或者用户禁用图像显示时，代替图像显示在浏览器中的内容。
- 假设由于下列原因用户无法查看图像，alt 属性可以为图像提供替代的信息：
    - 网速太慢
    - src 属性中的错误
    - 浏览器禁用图像
    - 用户使用的是屏幕阅读器
- 从SEO角度考虑，浏览器的爬虫爬不到图片的内容，所以我们要有文字告诉爬虫图片的内容

#### 结构、表现、行为三者分离
> 尽量在使结构（HTML），表现（CSS），行为（JS）分离维护
- 不使用行内样式（<style>.no-good {}</style>）
- 不在元素上使用 style 属性（<hr style="border-top: 5px solid black">）
- 不使用行内脚本（<script>alert('no good')</script>）
- 不使用表象元素（i.e. <b>, <u>, <center>, <font>, <b>）

## 命名
### 样式命名
1. class、id都需小写
2. 命名使用英文，禁止使用特殊字符
3. 名称间隔使用`-`符号
4. 类名命名需要语义化
5. css选择器中避免使用标签名

```css
// 示例
.wrap{}                 //外层容器
.btn-download-ios{}     //ios下载
```
#### 图片命名
1. 图片名称必须小写，禁止使用特殊字符、中文
2. 使用英文或拼音缩写，禁止特殊字符
3. 名称间隔使用-符号
4. 命名需要能体现图片的大概用途
```
// 示例
 bg.jpg          //背景图片
 mod-bg.jpg      //模块背景
 sprites.png     //精灵图
 btn-start.png   //开始按钮
 ico-play.png    //修饰性图片
```

### JS命名
##### 关于驼峰命名法
- Pascal Case 大驼峰式命名法：首字母大写。eg：StudentInfo、UserInfo、ProductInfo
- Camel Case 小驼峰式命名法：首字母小写。eg：studentInfo、userInfo、productInfo
#### 命名规范
- **变量**：以小驼峰命名法，规则：“类型+对象描述”方式 `var tableTitle = "LoginTable"`
- **函数**：小驼峰方式 ( 构造函数使用大驼峰命名法 )，规则-前缀为动词
- **常量**：全部大写，使用大写字母和下划线来组合命名，下划线用以分割单词。
- **类的成员**：
    - 公共属性和方法 : 同变量命名方式，例`this.getName=fn`
    - 私有属性和方法 : 前缀为下划线(_)后面跟公共属性和方法一样的命名方式,例：`var _name = name;`

#### 附规则
- 函数命名动词示例

动词|含义|返回值
---|---|---
can | 判断是否可执行某个动作 ( 权限 )|函数返回一个布尔值。true：可执行；false：不可执行
has|判断是否含有某个值|函数返回一个布尔值。true：含有此值；false：不含有此值
is|判断是否为某个值|函数返回一个布尔值。true：为某个值；false：不为某个值
get|获取某个值|函数返回一个非布尔值
set|设置某个值|无返回值、返回是否设置成功或者返回链式对象

### 文件资源命名
- 文件名不得含有空格
- 文件名建议只使用小写字母，不使用大写字母。( 为了醒目，某些说明文件的文件名，可以使用大写字母，比如`README、LICENSE`。 )
- 文件名包含多个单词时，单词之间建议使用半角的连词线 ( - ) 分隔。
- 引入资源使用相对路径，`不要指定资源所带的具体协议` ( http:,https: ) ，除非这两者协议都不可用
```html
<!-- 示例：不指定资源所带具体协议时 -->
<script src="//cdn.com/foundation.min.js"></script>
```

## 注释规范
### 单行注释（//）
- **单独一行**：//(双斜线)与注释文字之间保留一个空格
- **在代码后面添加注释**：//(双斜线)与代码之间保留一个空格，并且//(双斜线)与注释文字之间保留一个空格。
- **注释代码**：//(双斜线)与代码之间保留一个空格。

#### 多行注释（/* 注释说明 */）
- 若开始(/*和结束(*/)都在一行，推荐采用单行注释
- 若至少三行注释时，第一行为/*，最后行为*/，其他行以*开始，并且注释文字与*保留一个空格。
```js
/*
* 这是一个多行注释 
*/
```

### 函数注释
函数(方法)注释也是多行注释的一种，但是包含了特殊的注释要求，参照[代码注释规范](https://www.jianshu.com/p/46519b0499c3)

注释名|语法|含义|示例
---|---|---|---
@param|	@param 参数名 {参数类型} 描述信息|	描述参数的信息|	@param name {String} 传入名称
@return|	@return {返回类型} 描述信息	|描述返回值的信息	|@return {Boolean} true:可执行;false:不可执行
@author	|@author 作者信息 [附属信息：如邮箱、日期]|	描述此函数作者的信息	|@author 张三 2015/07/21
@version|	@version XX.XX.XX|	描述此函数的版本号|	@version 1.0.3
@example| @example 示例代码|	@example setTitle('测试')|	如下

```js
/**
 - 合并Grid的行
 - @param grid {Ext.Grid.Panel} 需要合并的Grid
 - @param cols {Array} 需要合并列的Index(序号)数组；从0开始计数，序号也包含。
 - @param isAllSome {Boolean} ：是否2个tr的cols必须完成一样才能进行合并。true：完成一样；false(默认)：不完全一样
 - @return void
 - @author polk6 2015/07/21 
 - @example
 - _________________                             _________________
 - |  年龄 |  姓名 |                             |  年龄 |  姓名 |
 - -----------------      mergeCells(grid,[0])   -----------------
 - |  18   |  张三 |              =>             |       |  张三 |
 - -----------------                             -  18   ---------
 - |  18   |  王五 |                             |       |  王五 |
 - -----------------                             -----------------
*/
function mergeCells(grid, cols, isAllSome) {
    // Do Something
}

```

## JS规范

- **防命名污染：**防止全局命名空间被污染，**推荐：**常用`IIFE函数表达式`，创建独立隔绝的定义域。也使得内存在执行完后立即释放。
```js
(function(){
  'use strict';

  // Code goes here

}());
```
- **变量声明：**避免隐式的声明为全局变量，如`var a=b=0;` b 就被隐式的创建为全局变量。
- **变量比较：**使用`===`，尽量避免使用`==`,因为它会有一层隐式类型转换
- **注意几个假值：** false,null,undefined,0,'',NaN
- **推荐使用三元条件判断**来代替简单If条件，如`return x===10?'valid':'invalid'`

## 代码规范工具
### JSHint
### JSLint
### ESLint
- [参考文章：前端开发规范之 eslint](https://juejin.im/post/5d3130be6fb9a07eb74b7621)

## CSS规范
1. 尽量使用缩写属性
2. 0后面不带单位
3. 合理的避免使用id作为选择器
4. 命名分格符使用`-`中划线
### 属性格式规范
- 为了保证一致性和可扩展性，每个声明应该用分号结束，每个声明换行。
- 属性名的冒号后使用一个空格。出于一致性的原因，属性和值（但属性和冒号之间没有空格）的之间始终使用一个空格。
- 每个选择器和属性声明总是使用新的一行。
- 属性选择器或属性值用双引号（””），而不是单引号（”）括起来。
- URI值（url()）不要使用引号。【如：background:url()对应值】
- 十六进制表示法：对于颜色值的十六进制可以使用缩写形式，如`color: #f3a;`,不推荐使用`color: #FF33AA;`
- **属性声明顺序**：作为最佳实践，我们应该遵循以下顺序：
    - 结构属性：
        1. display
        2. position, left, top, right etc.
        3. overflow, float, clear etc.
        4. margin, padding
    - 表现性属性：
        1. background, border etc.
        2. font, text
- 选择器和声明分离（针对多选择器时）
- 规则分隔：多个规则`{}`之间用一个空行分隔
```css
/*URI不使用引号*/
@import url(//cdn.com/foundation.css);

.box {
  display: block;
  position: absolute;
  left: 30%;
  right: 30%;
  overflow: hidden;
  margin: 1em;
  padding: 1em;
  background-color: #eee;
  border: 3px solid #ddd;
  font-family: 'Arial', sans-serif;
  font-size: 1.5rem;
  text-transform: uppercase;
}

/* 多选择器，多个规则之间用空行分隔 */
h1,
h2,
h3 {
  font-weight: normal;
  line-height: 1.2;
}
```
### 媒体查询与上下文（SCSS/Less）
- 在Sass中，当你嵌套你的选择器时也可以使用上下文媒体查询。
```css
.content-page {
  font-size: 1.2rem;
 
  /*媒体查询紧跟规则*/
  @media screen and (min-width: 641px) {
    font-size: 1rem;
  }
}
```

## 参考
- [JavaScript开发规范](https://www.cnblogs.com/polk6/p/4660195.html)
- [CSS开发规范](https://www.html.cn/archives/5505)
- [HTML开发规范](https://www.html.cn/archives/5364)
