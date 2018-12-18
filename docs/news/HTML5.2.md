### HTML5.2发布

> @2018-05-31

> 2017-12-14 W3C发布HTML5.2

#### 1. 官方链接

- W3C官网介绍：https://www.w3.org/TR/2017/REC-html52-20171214/
- HTML5.2更改记录：https://www.w3.org/TR/html52/changes.html#changes%22

#### 2. 新增的特性（部分）

- `<dialog>`元素
- 为残疾人提供更好的体验： [ARIA](https://www.w3.org/TR/wai-aria) 
- `<iframe>`标签的`allowpaymentrequest`属性------ 集成支付请求API： [Payment Request API](https://www.w3.org/TR/payment-request) *（意味着嵌入了第三方内容的页面能够控制该第三方内容是否可向用户请求获取支付凭证，进而让可嵌入的购物车工具可以利用新的API）*
- `<iframe>`标签的`sandbox`属性值为`allowpresentation` ----集成[[PRESENTATION-API\]](https://www.w3.org/TR/html52/references.html#biblio-presentation-api).
- 为MP4媒体定义了`about:html-kind`类型的URL
- `HTMLElement`的新属性`innerText` 
- 为`<link>`标签添加`nonce`属性----用在内容安全策略：[Content Security Policy](https://www.w3.org/TR/CSP3) 
- 为`<link>`标签的`rel`属性，定义了一些标准值
- 当属性`rel`值为`apple-touch-icon`时，允许在`<link>`标签里使用`size`属性
- 新方法：`registerContentHandler`,`isContentHandlerRegistered`,`isProtocolHandlerRegistered`

#### 3. 移除的特性

- 移除`<keygen>` ，`<menu>`， `<menuitem>`元素
- 移除`<input>`元素的`inputmode`和`dropzone`属性
- 移除`showModalDialog`方法（已被`<dialog>`元素取代）

#### 4. 变成合理的HTML结构

- `<body>`标签里面可以添加`<style>`标签了
- DOM里可以有多个`<main>` 元素了
- The presentation for the `<img>` element.（还不清楚是什么意思）
- `<div>` 标签可以作为`<dl>` 元素的子元素了
- 可以用`<dfn>` 标签作为`<li>`标签的后代元素，用来包含一个定义
- Headings within `legend` in a `fieldset`. 
- 可以在`<datalist>`中使用空的`<option>`作为子元素了
- 可以在HTML语法中，包含两个连字符或者以一个连字符结尾的注释

#### 5. 变成不合理的HTML结构

- `<caption>`元素的`role`值是不合理的
- 将inline-block（内联块）、inline-tables（内联表）、 floated and positioned block-level elements （有浮动和定位设置的块级元素）作为`<p>`元素的子元素是不合理的

> 参考链接：https://www.w3.org/blog/2017/12/html-5-2-is-done-html-5-3-is-coming/