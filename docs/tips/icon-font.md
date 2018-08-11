### IconFont 图标字体

> @2018-05-23

#### 一、 简介

- 使用的是@font-face，可以在网页上使用任何字体，而不需要考虑用户的电脑上有没有这个字体

- 只支持一种颜色
- 现在可以放心大胆的在PC、移动端使用图标字体(Iconfont)了

#### 二、 IcoMoon网站图标字体制作

网站IcoMoon： https://icomoon.io/app/

##### 情况一： 导入外部的SVG文件

- **准备**：准备好SVG资源

- **导入**：打开IcoMoon APP，点击左上角的`Import Icons`图标，导入想要添加的SVG文件

- **编辑**：导入之后，也可以在网页中对SVG进行编辑，点击顶部导航栏铅笔图标（Edit）>> 点击所要编辑的图标则会跳出编辑窗口（旋转、镜像、移动、缩放、裁切、中心点设置）

- **生成**：选择要导出的字体图标>>点击右下角`Generate Font`按钮进入导出页面>>可以修改图标的名称、Unicode编码>>点击上方`Preferences`按钮，可以设置Font Name字体名称、Class前缀、CSS选择器

  - Use i ——使用`<i>`标签，`<i class="icon-cry"></i>`
  - Use attribute selectors——使用属性选择器，`<span class="icon-cry"></span>`

- **下载**：点击右下角`Download`按钮下载字体包

- **使用**：主要包含Woff/eot/ttf/svg 格式的字体文件和一个 HTML 示例文件及 CSS 

  - 引入CSS

  - ``` <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="style.css">
    ```

  - 设置相应的字体

  - ```css
    <span class="icon-cry"></span>
    ```

  - 如果还需要设置字体大小，字体颜色，只需要在相应的类上添加样式即可

##### 情况二：使用IcoMoon上已有的字体图标

- 使用网站已有的图标，按照情况一的编辑这一步开始即可

#### 三、阿里巴巴Iconfont网站图标字体制作

网站Iconfont: http://www.iconfont.cn/

- **选择图标**：将需要的使用图标全部添加至购物车
- **生成图标**：进入购物车>>添加至项目>>新建项目>>命名>>确定
- **使用图标**：可以使用阿里巴巴给的在线链接，也可以下载至本地使用
  - Unicode使用方式及效果：[Unicode demo](https://zhangwanqin357.github.io/demo-preview/iconfont-demos/demo_unicode.html)
  - Font class使用方式及效果：[Font class demo](https://zhangwanqin357.github.io/demo-preview/iconfont-demos/demo_fontclass.html)
  - Symbol使用方式及效果：[Symbol demo](https://zhangwanqin357.github.io/demo-preview/iconfont-demos/demo_symbol.html)

#### 三、 兼容性

- 兼容IE6



> 参考链接1： [IcoMoon App - 分分钟打造你自己的 Web Font](https://c7sky.com/icomoon-app.html)

> 相关文章：[Icon Fonts are Awesome](https://css-tricks.com/examples/IconFont/)

