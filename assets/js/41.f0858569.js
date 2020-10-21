(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{398:function(r,e,t){"use strict";t.r(e);var a=t(42),n=Object(a.a)({},(function(){var r=this,e=r.$createElement,t=r._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[t("h3",{attrs:{id:"javascript报错问题汇总"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#javascript报错问题汇总"}},[r._v("#")]),r._v(" JavaScript报错问题汇总")]),r._v(" "),t("blockquote",[t("p",[r._v("@2018-06-01")])]),r._v(" "),t("h4",{attrs:{id:"_1-uncaught-typeerror-cannot-read-property"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-uncaught-typeerror-cannot-read-property"}},[r._v("#")]),r._v(" 1. Uncaught TypeError: Cannot read property")]),r._v(" "),t("ul",[t("li",[r._v("最可能出现错误的原因：不恰当的初始化状态，也就是读取一个对象的属性或者方法的时候，这个对象没有进行正确的初始化")])]),r._v(" "),t("h4",{attrs:{id:"_2-typeerror-undefined-is-not-an-object-evaluating"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-typeerror-undefined-is-not-an-object-evaluating"}},[r._v("#")]),r._v(" 2. TypeError: ‘undefined’ is not an object (evaluating")]),r._v(" "),t("ul",[t("li",[r._v("这个错误出现在Safari浏览器中，与第一条的错误原因本质上是相同的，只不过Safari采用的不同的错误信息")])]),r._v(" "),t("h4",{attrs:{id:"_3-typeerror-null-is-not-an-object-evaluating"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-typeerror-null-is-not-an-object-evaluating"}},[r._v("#")]),r._v(" 3. TypeError: null is not an object (evaluating")]),r._v(" "),t("ul",[t("li",[r._v("这个错误出现在Safari浏览器中，与第一条的区别是，这个对象是null")]),r._v(" "),t("li",[r._v("错误场景：在元素没有加载完成之前，就在js里面调用DOM元素（因为DOM API会为空的对象返回null）")])]),r._v(" "),t("h4",{attrs:{id:"_4-unknown-script-error"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-unknown-script-error"}},[r._v("#")]),r._v(" 4. (unknown): Script error")]),r._v(" "),t("ul",[t("li",[r._v("脚本错误，这个错误一般出现在跨域的数据通信下")])]),r._v(" "),t("h4",{attrs:{id:"_5-typeerror-object-doesn-t-support-property-出现在ie中-以及typeerror-undefined-is-not-a-function-出现在chrome中"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-typeerror-object-doesn-t-support-property-出现在ie中-以及typeerror-undefined-is-not-a-function-出现在chrome中"}},[r._v("#")]),r._v(" 5. TypeError: Object doesn’t support property（出现在IE中） 以及TypeError: ‘undefined’ is not a function （出现在Chrome中）")]),r._v(" "),t("ul",[t("li",[r._v("错误场景：当调用了一个未定义的方法时出现，")]),r._v(" "),t("li",[r._v("最可能出现错误的原因：99.9%的情况都是因为不能将this关键字绑定到方法上（特别是在IE里）")])]),r._v(" "),t("h4",{attrs:{id:"_6-uncaught-rangeerror-maximum-call-stack"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-uncaught-rangeerror-maximum-call-stack"}},[r._v("#")]),r._v(" 6. Uncaught RangeError: Maximum call stack")]),r._v(" "),t("ul",[t("li",[r._v("第一种情况：调用了一个递归函数，但是递归函数没有结束点")]),r._v(" "),t("li",[r._v("第二种情况：给一个函数传递的值超出了函数能够接受的范围")])]),r._v(" "),t("h4",{attrs:{id:"_7-typeerror-cannot-read-property-length"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-typeerror-cannot-read-property-length"}},[r._v("#")]),r._v(" 7. TypeError: Cannot read property ‘length’")]),r._v(" "),t("ul",[t("li",[r._v("这个错误出现在Chrome浏览器中，原因是读取了一个未定义变量的length属性")]),r._v(" "),t("li",[r._v("可能出现错误的原因：定义函数时设定了参数，但是调用函数时没有传参")]),r._v(" "),t("li",[r._v("解决方法： 需要访问函数之外的变量的时候，完全不需要设定参数，直接访问即可；或者调用函数时传参")])]),r._v(" "),t("h4",{attrs:{id:"_8-uncaught-typeerror-cannot-set-property-of-undefined"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8-uncaught-typeerror-cannot-set-property-of-undefined"}},[r._v("#")]),r._v(" 8. Uncaught TypeError: Cannot set property of undefined")]),r._v(" "),t("ul",[t("li",[r._v("不能给undefined设置属性")])]),r._v(" "),t("h4",{attrs:{id:"_9-referenceerror-event-is-not-defined"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9-referenceerror-event-is-not-defined"}},[r._v("#")]),r._v(" 9. ReferenceError: event is not defined")]),r._v(" "),t("ul",[t("li",[r._v("错误原因：获取未定义的变量，或者变量不在作用域时出现")]),r._v(" "),t("li",[r._v("当你在事件处理系统出现这个错误时，请确保将事件对象当作参数传递给了回调函数")])]),r._v(" "),t("blockquote",[t("p",[r._v("参考链接： https://codeburst.io/top-10-javascript-errors-from-1000-projects-and-how-to-avoid-them-2956ce008437")])])])}),[],!1,null,null,null);e.default=n.exports}}]);