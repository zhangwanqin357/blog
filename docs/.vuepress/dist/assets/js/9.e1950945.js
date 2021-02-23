(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{80:function(t,i,e){"use strict";e.r(i);var _=e(0),r=Object(_.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"content"},[e("h3",{attrs:{id:"各种api资源"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#各种api资源","aria-hidden":"true"}},[t._v("#")]),t._v(" 各种API资源")]),e("h4",{attrs:{id:"_1-可用在线api"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-可用在线api","aria-hidden":"true"}},[t._v("#")]),t._v(" 1. 可用在线API")]),e("ul",[e("li",[e("strong",[t._v("数字货币行情Coin Market Cap")]),t._v("：https://coinmarketcap.com/zh/api/\n"),e("ul",[e("li",[t._v("描述：全球的加密货币价格走势，每五分钟更新一次，网站有给出详细的API调用方法，有中文版")])])]),e("li",[e("strong",[t._v("豆瓣API V2")]),t._v("：https://developers.douban.com/wiki/?title=api_v2\n"),e("ul",[e("li",[t._v("描述：豆瓣官方给定的API，分类全面（图书、电影、音乐、同城、广播、用户、日记、相册、线上活动、论坛、回复、我去），官方也有给出详细的调用方法以及状态码，使用时需要详细学习")]),e("li",[t._v("例如搜索图书："),e("code",[t._v("https://api.douban.com/v2/book/search?q=javascript&count=1")])])])]),e("li",[e("strong",[t._v("动图GIPHY API")]),t._v("：https://developers.giphy.com/docs/\n"),e("ul",[e("li",[t._v("描述：由GIPHY提供的API，GIPHY的GIF库是世界上最大的GIF动画库，此API"),e("strong",[t._v("实现了CORS跨域")]),t._v("，可以直接在JavaScript或者网页浏览器中使用，提供了多种文件大小、尺寸、格式")]),e("li",[e("strong",[t._v("权限")]),t._v("：使用此API需要秘钥，获取秘钥的方式也很简单，"),e("a",{attrs:{href:"https://developers.giphy.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("在这里Create an App")]),t._v(",每个App都有自己的秘钥，"),e("strong",[t._v("免费")])]),e("li",[t._v("端口细节：详细见文档的Technical Documentation\n"),e("ul",[e("li",[t._v("Search端点：搜索")]),e("li",[t._v("Trending端点：最新的资源，由真人编辑。返回的结果是GIPHY首页上展示的GIF，一般默认返回25个值")]),e("li",[t._v("Translate端点：")]),e("li",[t._v("Random端点：随机返回一个动图")]),e("li",[t._v("StickerAPI：只提供带有透明背景的GIF动画，包含的终端：Sticker Search、Sticker Roulette (Random)、Sticker Trending、Sticker Translate，还有Sticker Packs: Listing Endpoint、Sticker Packs: Individual Sticker Pack Endpoint、Sticker Packs: Stickers Endpoint、Sticker Packs: Children Pack Listing Endpoint")])])]),e("li",[t._v("Code Examples：提供了多种语言的使用方式，这里只详细描述JavaScript的方式")]),e("li",[t._v("使用方式：可以参考"),e("a",{attrs:{href:"https://ftgibran.github.io/#/vue-api-request",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://ftgibran.github.io/#/vue-api-request")]),t._v(" 学习\n"),e("ol",[e("li",[t._v("搜关键字“funny cat”："),e("code",[t._v("http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=YOUR_API_KEY")])]),e("li",[t._v("搜ID “ffeqkVgjJpYtjy ”："),e("code",[t._v("http://api.giphy.com/v1/gifs/feqkVgjJpYtjy?api_key=YOUR_API_KEY")])])])]),e("li",[t._v("gif参数渲染建议：")])])])]),e("table",[e("thead",[e("tr",[e("th",[t._v("适用场景")]),e("th",[t._v("高度")]),e("th",[t._v("宽度")])])]),e("tbody",[e("tr",[e("td",[e("strong",[t._v("mobile")])]),e("td",[t._v("fixed_height")]),e("td",[t._v("fixed_width")])]),e("tr",[e("td",[e("strong",[t._v("mobile静态预览图像")])]),e("td",[t._v("fixed_height_still")]),e("td",[t._v("fixed_width_still")])]),e("tr",[e("td",[e("strong",[t._v("mobile无限滚动和普通动画预览")])]),e("td",[t._v("fixed_height_downsampled")]),e("td",[t._v("fixed_width_downsampled")])]),e("tr",[e("td",[e("strong",[t._v("mobile键盘")])]),e("td",[t._v("fixed_height_small")]),e("td",[t._v("fixed_width_small")])]),e("tr",[e("td",[e("strong",[t._v("mobile键盘静态预览图像")])]),e("td",[t._v("fixed_width_small_still")]),e("td",[t._v("fixed_width_still")])])])]),e("table",[e("thead",[e("tr",[e("th",[t._v("适用场景")]),e("th",[t._v("属性")])])]),e("tbody",[e("tr",[e("td",[t._v("缩略图和预览")]),e("td",[t._v("preview")])]),e("tr",[e("td",[t._v("文件尺寸小于200kb")]),e("td",[t._v("downsized_small")])]),e("tr",[e("td",[t._v("文件尺寸小于2MB")]),e("td",[t._v("downsized")])]),e("tr",[e("td",[t._v("文件尺寸小于5MB")]),e("td",[t._v("downsized_medium")])]),e("tr",[e("td",[t._v("文件尺寸小于8MB")]),e("td",[t._v("downsized_large")])]),e("tr",[e("td",[t._v("下载文件的预览图像")]),e("td",[t._v("downsized_still")])]),e("tr",[e("td",[t._v("desktop，原始尺寸和大小")]),e("td",[t._v("original")])]),e("tr",[e("td",[t._v("desktop，原始尺寸的预览图像")]),e("td",[t._v("original_still")])]),e("tr",[e("td",[t._v("持续时间设置为15s")]),e("td",[t._v("looping")])])])]),e("ul",[e("li",[t._v("JSONPlaceholder伪造的在线API：http://jsonplaceholder.typicode.com/\n"),e("ul",[e("li",[t._v("描述：非常简单的模拟在线API，网页上有清晰的展示调用方法")])])])])])}],!1,null,null,null);i.default=r.exports}}]);