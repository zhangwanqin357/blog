### JSONP跨域

> @2018-05-17

> 更多知识见《高性能JavaScript》第127页（动态脚本注入）

#### 1. JSONP简介

- JSON with padding，填充式JSON，参数式JSON

- 由两部分组成：回调函数和数据

  - 回调函数函数名在请求中指定，下面例子`callback`

  - 数据为传入回调中的JSON数据，下面例子`{"name": "NOcholas"}`
  -  ` callback({"name": "NOcholas"})`

- 原理：动态创建`<script> `元素，由于`<script> `元素的src属性不收同源策略的约束，所以能够实现跨域获取数据

- 与普通XHR请求的区别

  - 请求Type是script请求；
  - 返回类型是js脚本
  - 带有callback参数

#### 2. 原生实现方式

```javascript
function handleResponse (response) {
    var oText =document.getElementById("text4");
    var result = JSON.stringify(response);
    oText.value = result;
}

window.onload = function () {
    var oDiv =document.getElementById("mydiv");
    var oBtn =document.getElementById("btn4");

    oBtn.onclick = function () {
        var script = document.createElement("script"); // 动态创建script元素
        script.src = "https://api.douban.com/v2/book/search?q=javascript&count=1&callback=handleResponse"; // 指定src, 通过查询字符串callback=handleResponse来指定JSONP服务
        oDiv.insertBefore(script, oBtn);
    }
}
```

#### 3. jQuery封装JSONP

- 方法一：设置`$.ajax`的属性dataType为jsonp
- 方法二：`$.getJSON()`,地址中加上`callback=?`参数即可

```javascript
<script type="text/javascript">
    function showData3(data) {
      console.log("调用showData");
      var result = JSON.stringify(data);
      $("#text3").val(result)
    }
    $(document).ready(function(){
      $("#btn3").click(function() {
        // 方法一
        $.ajax({
          // url: 'https://api.douban.com/v2/book/search?q=javascript&count=1',
          url: 'https://api.douban.com/v2/book/search',
          type: 'GET',
          dataType: "jsonp", //指定服务器返回的数据类型
          jsonp: 'callback', // 这个参数值由后台设定，需与后台相同
          jsonpCallback: "showData3", // 指定回调函数的名称
          cache:true, // 设置true表示可以缓存，如果不设置则不缓存，具体表现为在请求里面有一个"_"参数
          data: { // 搜索参数
            q: "javascript",
            count: 1
          },
          success: function (data) {
            console.log("调用success");
          }
        })
	    // 方法二
        // 使用 $.getJSON()也可以实现
        // 只要在地址中加上callback=?参数即可
        $.getJSON('https://api.douban.com/v2/book/search?q=javascript&count=1&callback=?', function(data) {
            console.log("调用success");
            showData3(data)
        });
      });
    })
 </script>
```

#### 4. 弊端

- 服务器需要改动代码支持
- 只支持GET方法
- 发送的不是XHR请求

------

**小技巧**：如果要知道某一个网站是否支持JSONP,只需要在网站里>>打开控制台Network>>选择一个请求双击打开>>在地址栏后追加"callback=zzz"(zzz为任意字符串)>>如果返回结果为zzz({...}),即说明网站支持JSONP;

例如慕课网首页请求： https://www.imooc.com/index/getstarlist,，返回数据为:

```json
{
  "result": 0,
  "data": {
    "cate": [...],
    "numberOne": [...],
    "list": [...]
  },
  "msg": "成功"
}
```

增加callback参数：https://www.imooc.com/index/getstarlist?callback=zzz

```
zzz({
  "result": 0,
  "data": {
    "cate": [...],
    "numberOne": [...],
    "list": [...]
  },
  "msg": "成功"
})
```

结论：支持JSONP跨域。