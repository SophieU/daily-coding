## ReactNative项目的调试
在运行好第一个RN项目后，通过脚手架的App可以看到以下调试信息：
- `Ctrl + M`：在模拟器上打开调试Debug菜单（真机上通过摇动手机打开）
- `双击R`：重新加载App
- `Enable Hot Reload`：在当前页热加载

## Error & Warning
在JS运行时出现Error或者Warning时，在模拟器中会以红屏的形式展示

### Warnings
> React Native 程序运行时出现的Warning也会被直接显示在屏幕上，以黄色的背景显示，并会打印出警告信息，你也可以通过`console.warn()`来手动触发warnings,也可以通过`console.disableYellowBox = true`来手动禁用warnings显示，或者通过`console.ignoreYellowBox = ['waring: ...'];`来忽略相应的warning.

## Chrome Developer Tools
###  Chrome开发工具
> 谷歌chrome开发工具，是基于谷歌浏览器内含的一套网页制作和调试工具，开发者工具允许网页开发者深入浏览器和网页应用程序的内部。该工具可以有效地追踪布局问题，设置JS断点并可深入理解代码的最优化策略。Chrome开发工具一共提供了8大组工具：
- Element面板：用于查看和编辑当前页面中的HTML和CSS元素
- Network面板：用于查看HTTP请求的详细信息，如请求头，响应头及返回内容等
- Source面板：用于查看和调试当前页面所加载的脚本的源文件
- TimeLine面板：用于查看脚本的执行时间，页面元素渲染时间等信息
- Profiles面板：用于查看CPU执行时间与内存占用等信息
- Resource面板：用于查看当前页面所请求的资源文件，如HTML，CSS样式文件等。