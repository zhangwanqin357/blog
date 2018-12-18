(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{195:function(e,t,s){"use strict";s.r(t);var a=s(0),o=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"content"},[s("h3",{attrs:{id:"chrome-devtips"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#chrome-devtips","aria-hidden":"true"}},[e._v("#")]),e._v(" Chrome devtips")]),e._v(" "),s("blockquote",[s("p",[e._v("@2018-12-28")])]),e._v(" "),s("blockquote",[s("p",[e._v("查看此页时，建议直接打开控制台测试")])]),e._v(" "),s("h4",{attrs:{id:"👉-全局快捷方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#👉-全局快捷方式","aria-hidden":"true"}},[e._v("#")]),e._v(" 👉 全局快捷方式")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("ctrl + shift + p")]),e._v("：打开命令行")]),e._v(" "),s("li",[s("code",[e._v("ctrl + shift + D")]),e._v("：切换devtools面板的位置")]),e._v(" "),s("li",[s("code",[e._v("ctrl + [/]")]),e._v("：左右切换tab")])]),e._v(" "),s("h4",{attrs:{id:"👉-devtools任意位置：截屏"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#👉-devtools任意位置：截屏","aria-hidden":"true"}},[e._v("#")]),e._v(" 👉 devtools任意位置：截屏")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("ctrl + shift + p")]),e._v("调出命令行 → 输入screen → Capture full size screenshot 截取整个网页\n→ Capture node screenshot 截取选中的某一结点 → Capture screenshot 截取屏幕展示出的部分")])]),e._v(" "),s("h4",{attrs:{id:"👉-console面板：监听对象上的事件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#👉-console面板：监听对象上的事件","aria-hidden":"true"}},[e._v("#")]),e._v(" 👉 Console面板：监听对象上的事件")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("monitorEvents(object [, events])")])]),e._v(" "),s("li",[e._v("例如，在控制台打印："),s("code",[e._v("monitorEvents(window,'click')")]),e._v("，此时，只要在页面上进行点击，都会打印出event事件")]),e._v(" "),s("li",[e._v("参考：https://umaar.com/dev-tips/14-monitor-events/")])]),e._v(" "),s("h4",{attrs:{id:"👉-console面板：console-table打印object-array"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#👉-console面板：console-table打印object-array","aria-hidden":"true"}},[e._v("#")]),e._v(" 👉 Console面板：console.table打印Object/Array")]),e._v(" "),s("ul",[s("li",[e._v("例如："),s("code",[e._v('var languages = [ { name: "JavaScript", fileExtension: ".js" }, { name: "TypeScript", fileExtension: ".ts" }, { name: "CoffeeScript", fileExtension: ".coffee" } ]; console.log(languages); console.table(languages);')])]),e._v(" "),s("li",[e._v("参考：https://umaar.com/dev-tips/82-console-table/")])]),e._v(" "),s("h4",{attrs:{id:"👉-console面板：console-time-console-timeend结合使用计算函数执行时长"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#👉-console面板：console-time-console-timeend结合使用计算函数执行时长","aria-hidden":"true"}},[e._v("#")]),e._v(" 👉 Console面板：console.time,console.timeEnd结合使用计算函数执行时长")]),e._v(" "),s("ul",[s("li",[e._v("例如："),s("code",[e._v("console.time('hello'); console.timeEnd('hello');")])]),e._v(" "),s("li",[e._v("参考：https://umaar.com/dev-tips/83-console-time/")])]),e._v(" "),s("h4",{attrs:{id:"👉-elements面板：展开所有子元素"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#👉-elements面板：展开所有子元素","aria-hidden":"true"}},[e._v("#")]),e._v(" 👉 Elements面板：展开所有子元素")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("alt + 鼠标点击元素左侧小箭头")])]),e._v(" "),s("li",[e._v("参考：https://umaar.com/dev-tips/18-alt-click-expand-node/")])]),e._v(" "),s("h4",{attrs:{id:"👉-elements面板：将元素调整到视线中"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#👉-elements面板：将元素调整到视线中","aria-hidden":"true"}},[e._v("#")]),e._v(" 👉 Elements面板：将元素调整到视线中")]),e._v(" "),s("ul",[s("li",[e._v("选中元素 → 右键Scroll into view")])]),e._v(" "),s("h4",{attrs:{id:"👉-elements面板：查看任意节点上的注册事件的函数定义"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#👉-elements面板：查看任意节点上的注册事件的函数定义","aria-hidden":"true"}},[e._v("#")]),e._v(" 👉 Elements面板：查看任意节点上的注册事件的函数定义")]),e._v(" "),s("ul",[s("li",[e._v("选中元素 → 右侧Event Listeners → 打开任意事件，选中handler → 右键show function definition")]),e._v(" "),s("li",[e._v("参考：https://umaar.com/dev-tips/24-view-event-listeners/")])]),e._v(" "),s("h4",{attrs:{id:"👉-sources面板：快捷键"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#👉-sources面板：快捷键","aria-hidden":"true"}},[e._v("#")]),e._v(" 👉 Sources面板：快捷键")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("alt + 鼠标选择")]),e._v("：竖向选择")]),e._v(" "),s("li",[s("code",[e._v("ctrl + D")]),e._v("：选中下一个")]),e._v(" "),s("li",[s("code",[e._v("ctrl + U")]),e._v("：取消选中的上一个")])]),e._v(" "),s("h4",{attrs:{id:"👉-network面板：filter筛选请求"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#👉-network面板：filter筛选请求","aria-hidden":"true"}},[e._v("#")]),e._v(" 👉 Network面板：Filter筛选请求")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("is:running")])]),e._v(" "),s("li",[s("code",[e._v("status-code:200")])]),e._v(" "),s("li",[s("code",[e._v("method:get")])]),e._v(" "),s("li",[s("code",[e._v("domain")])]),e._v(" "),s("li",[s("code",[e._v("larger-than:200")]),e._v("：大于200B")]),e._v(" "),s("li",[s("code",[e._v("-larger-than:20")]),e._v(": 不大于20B")])])])}],!1,null,null,null);o.options.__file="chrome-dev-tips.md";t.default=o.exports}}]);