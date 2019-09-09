### CSS属性：filter（滤镜）

> @2018-05-25

>  [Online Demo](http://bennettfeely.com/filters/)

>  [Github Demo](https://zhangwanqin357.github.io/demo-preview/css-demos/13.css3%E5%B1%9E%E6%80%A7filter%E5%AE%9E%E7%8E%B0%E5%9B%BE%E7%89%87%E6%BB%A4%E9%95%9C.html)

> [Online Demo for backdrop-filter](https://webkit.org/demos/backdrop-filter/) (记得使用iOS设备查看效果，浏览器看不到效果)

#### 1. 作用对象：

- 主要运用在图片元素上，会直接影响其后代所有元素

#### 2. 属性格式：

- filter: none | blur() |brightness() | contrast() | drop-shadow() | grayscale() | hue-rotate() | invert() | opacity() | saturate() | sepia() | url()

  - grayscale(*%*) ：灰度
    - 参数：默认1，0%-100%
  - sepia(%)：褐色滤光镜
    - 参数：默认1，0%-100%
  - saturate(%) ：饱和度
    - 参数：默认1，可以超过100%
  - hue-rotate(deg)：色相旋转
    - 参数：默认0deg，没有最大值，但是360deg相当于又绕一圈
  - invert(%)：反色，类似于相机底片
    - 参数：默认1，0%-100%
  - opacity(%)：透明度
    - 参数：默认1，0%-100%

  - brightness(%)：亮度
    - 参数：默认1，可以超过100%
  - contrast(%)：对比度
    - 参数：默认1，可以超过100%
  - blur(px)：高斯模糊
    - 参数：模糊半径，默认0
    - 如：filter: blur(3px);
  - drop-shadow(offset-x offset-y [blur-radius]  [spread-radius color)：阴影效果
    - 参数：offset-x：设定水平方向偏移距离，正值向右，负值向左
    - 参数：offset-y：设定垂直方向偏移距离，正值向下，负值向上
    - 参数：blur-radius：可选，模糊半径，值越大越模糊，默认0
    - 参数：spread-radius：可选，正值会使阴影扩张和变大，负值会使阴影缩小，默认0
    - 参数：color：可选
  - url()

- 可以多个filter函数组合使用，使用空格分开

  - 如：filter: blur(20px) grayscale(20%); 

#### 3.相关拓展：

- backdrop-filter属性
  - 使用方法和取值与filter属性一样
    - 如：background: rgba(0,0,0,.2);backdrop-filter: blur(3px);
  - 区别：只对元素的背景做filter效果，不影响后代元素
  - 使用注意事项：
    - 运用backdrop-filter属性的元素背景应该使用半透明，否则没有效果
    - 当backdrop-filter属性和裁减属性（如border-radius,mask,clip-path）一起使用时，会有bug产生
    - 可以配合动画属性animation一起使用
    - 目前只支持Safari浏览器，而且需要添加前缀：-webkit-backdrop-filter

#### 

> W3定义：https://www.w3.org/TR/filter-effects/#FilterProperty

> 参考链接1：http://www.w3cplus.com/css3/ten-effects-with-css3-filter

> 参考链接2：https://www.w3cplus.com/css3/advanced-css-filters.html

> 参考链接3：https://css-tricks.com/the-backdrop-filter-css-property/