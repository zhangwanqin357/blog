### SVG基础

> @2018-06-06

#### 1. SVG简介

- SVG：Scalable Vector Graphics ，可缩放矢量图形 ,与屏幕分辨率无关，体积上能使用Gzip的方式压缩
- XML语言的一种形式，严格遵从XML语法

#### 2. SVG基本概念

- viewport：物理窗口

- viewBox：实物窗口

- preserveAspectRatio：保留横纵比

  ```html
  <svg width="500" height="200" viewBox="0 0 50 20">
      <rect x="20" y="10" width="10" height="5" stroke="#000000"></rect>
  </svg>
  /*
  	viewport: (0,0)到(500,200)-----默认情况下SVG自动充满viewport
  	viewBox: (0,0)到(50,20) -------实际图形的尺寸就需要在这个基础上*10
  */
  ```

  

#### 3. SVG绘制基本形状

> 以下形状`<rect>`、`<circle>`、`<ellipse >`、`<polygon>`、`<polyline>`的共用属性：
>
> - id：名称，也可以使用class命名.
> - fill：填充色
> - stroke：边框色
> - stroke-width：边框的宽度（实验得出：这个宽度是在直径上的宽度，也就是半径上宽度的2倍）

- 矩形： `<rect>`
  - x和y：矩形左上角的坐标
  - width：矩形宽
  - height：矩形高
  - rx和ry：实现圆角效果时，圆角沿x，y轴的半径
- 圆形：`<circle>`
  - cx和cy：圆心在x，y轴上的坐标
  - r：圆的半径
- 椭圆：`<ellipse >`
  - cx：椭圆圆心在x轴的坐标
  - cy：椭圆圆心在y轴的坐标
  - rx：椭圆在x轴的半径
  - ry：椭圆在y轴的半径
- 多边形：`<polygon>`
  - points：对应多边形的每个点，每个点具有一个坐标（x,y），x与y之间用`,`分隔，每个点之间用空格分隔
- 直线：`<line>`
  - x1和y1：起点的x轴，y轴坐标
  - x2和y3：终点的x轴，y轴坐标
  - stroke：直线的颜色
  - stroke-width：直线的粗细
- 折线：`<polyline>`
  - 属性与`<polygon>`相似

#### 4.SVG的`<path>`元素

> 注意：path的指令，参数大写代表绝对坐标，小写代表与前一个坐标的相对坐标

- `<path>`元素的基本指令

  - M / m：起始点，所有`<path>`都以M开始，(移动画笔，但是不会画线)

    - Move to

    - 参数：x , y

  - H / h：从当前点的坐标画水平直线到指定的`x`轴坐标 

    - Horizontal line to
    - 参数：x （越大越往右，小写h可以视为长度）

  - V / v：从当前点的座标画垂直直线到指定的`y`轴坐标 

    - Vertical line to 
    - 参数： y （越大越往下，小写v可以视为长度）

  - L / l：从当前点的坐标画直线到指定点的 `x y`坐标 

    - Line to 
    - 参数：x , y

  - C / c：从当前点的坐标画条三次贝塞尔曲线到指定点的`x,y`坐标

    - Curve 
    - 参数：x1,y1（第一个控制点）；x2,y2（第二个控制点）；x,y（结束点）

  - S / s：从当前点的坐标画条反射的贝塞曲线到指定点的`x, y`坐标 （相当于在C的基础上添加一条同样曲线的贝塞尔曲线）

    - Smooth curve 
    - 参数：x2,y2（控制点）；x,y（结束点）

  - Q / q：从当前点的坐标画条反射二次贝塞曲线到指定点的`x, y`坐标 （起点和终点的贝塞尔曲线共用一个控制点）

    - Quadratic Bézier curve 
    - 参数：x1,y1（控制点）;x,y（结束点）

  - T / t：从当前点的坐标画条反射二次贝塞曲线到指定点的`x, y`坐标 （前方要接上Q）

    - Smooth Quadratic Bézier curve 
    - 参数：x,y（终点）

  - Z / z：关闭路径，将当前点坐标与第一个点的坐标连接起来 

    - Closepath 
    - 没有参数，放在最后，表示起点和终点闭合

  - A / a：从当前点的坐标画个椭圆形到指定点的`x, y`坐标 

    - Arc 
    - 参数：....

#### 5. SVG的填充特性

> 填充特性就是给已经绘制好的SVG着色 

- fill

  - 给绘制的图形填充色，分为纯色填充、渐变色填充、图案填充
  - 纯色填充：给定合法的颜色值即可
  - 渐变色填充：线性渐变、径向渐变

- fill-opacity

  - 用来设置元素填充的透明度，值为0-1

- fill-rule

  - 定义判断点是不是属于填充范围的算法，值为nonzero,evenodd,inherit

- fill-break

- fill-color

- fill-image

- fill-origin

- fill-position

- fill-size

- fill-repeat

- 使用CSS实现填充

  

#### 6. SVG的描边特性

- stroke
  - 定义边框颜色 ，默认black
- stroke-width
  - 图形边框的宽度 ,默认值1
- stroke-opacity
- stroke-dasharray
  - 允许我们将路径转换成虚线而不是实线 ，通过这个属性，可以指定虚线的长度及以虚线之间的距离，用逗号或空格分开。 
- stroke-linecap
  - 当使用`<line>` 、`<ployline>`来画线时，使用stroke-linecap来指定线的头尾的形状
  - 值为：butt（平面）, round（圆弧）, square（方形）, inherit
- stroke-linejoin
  - 定义线段在交叉时的效果
  - 值为：miter（尖的）,round（圆的）,bevel（平的）,inherit
- stroke-miterlimit
- stroke-dashoffset
  - 指定虚线的起始偏移距离 
- stroke-break
- stroke-dash-corner
- stroke-dash-justify
- stroke-color
- stroke-image
- stroke-origin
- stroke-position
- stroke-size
- stroke-repeat

#### 7.SVG使用方法：

1. `<img>`标签中使用：只是将SVG当图片使用时使用

   - `<img src="bblogo.svg" alt="Breaking Borders Logo" height="65" width="68"> `
   - 缺点：在交互上有限制，不能使用JS来控制

2. background-image使用方式：只是将SVG当图片使用时使用

   - ```
     .logo {
         background-image: url(bblogo.svg);
     }
     ```

   - 缺点：不要使用`base64`编码来格式化SVG图片 ，因为他在加载完前会阻塞其他资源的下载；在交互上有限制，不能使用JS来控制

3. `<iframe>`中使用，不建议使用

4. `<embed`标签中使用，不建议使用

5. `<object>`中使用：**建议使用**

   - `<object type="image/svg+xml" data="bblogo.svg">Your browser does not support SVGs</object>`
   - 优点：可以使用JS进行交互控制

6. 将SVG直接插入到html中：

   - `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 68 65"> <path fill="#1A374D" d="M42 27v-20c0-3.7-3.3-7-7-7s-7 3.3-7 7v21l12 15-7 15.7c14.5 13.9 35 2.8 35-13.7 0-13.3-13.4-21.8-26-18zm6 25c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7z"/> <path d="M14 27v-20c0-3.7-3.3-7-7-7s-7 3.3-7 7v41c0 8.2 9.2 17 20 17s20-9.2 20-20c0-13.3-13.4-21.8-26-18zm6 25c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7z"/> </svg> `
   - 优点：节省HTTP请求，方便使用JS进行交互控制
   - 缺点：图片不能被浏览器缓存，使用JS控制也意味着浏览器会发生重绘行为





#### 参考链接

> svg应用指南：https://svgontheweb.com/zh/#resources