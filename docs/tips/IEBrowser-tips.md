#### 一些IE浏览器开发中的坑

> 2018-07-11

- 🇨🇳 中文：使用IE浏览器打开本地html页面时，页面路径不能有中文，否则本地js文件无法加载成功；
- ES6：IE中提示 `SCRIPT1004: 缺少 ';'`，原因是IE10及以下不支持let关键字，使用babel转码为es2015即可。
- ES6 Promise：Promise在IE中不兼容，解决方法：`<script src = "https://cdn.polyfill.io/v2/polyfill.min.js"></script>`，可以兼容到IE9；（或者bluebird.js）
- 控制台：在页面还未加载完成时就按下F12时，会报错`IE已停止工作`；
- 兼容性：IE8中——`SCRIPT5007: 属性“$”的值为 null、未定义或不是 Function 对象`，查看原因，是因为当前引用jQuery3.3.1兼容到IE9+

