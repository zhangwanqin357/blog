### Chrome devtips
::: tip
查看此页时，建议直接打开控制台测试
:::

#### 👉 全局快捷方式
- `ctrl + shift + p`：打开命令行
- `ctrl + shift + D`：切换devtools面板的位置
- `ctrl + [/]`：左右切换tab

#### 👉 devtools任意位置：截屏
- `ctrl + shift + p`调出命令行 → 输入screen → Capture full size screenshot 截取整个网页 
→ Capture node screenshot 截取选中的某一结点 → Capture screenshot 截取屏幕展示出的部分

#### 👉 Console面板：监听对象上的事件
- `monitorEvents(object [, events])`
- 例如，在控制台打印：`monitorEvents(window,'click')`，此时，只要在页面上进行点击，都会打印出event事件
- 参考：https://umaar.com/dev-tips/14-monitor-events/

#### 👉 Console面板：console.table打印Object/Array
- 例如：`var languages = [
          { name: "JavaScript", fileExtension: ".js" },
          { name: "TypeScript", fileExtension: ".ts" },
          { name: "CoffeeScript", fileExtension: ".coffee" }
      ];
      console.log(languages);
      console.table(languages);`
- 参考：https://umaar.com/dev-tips/82-console-table/

#### 👉 Console面板：console.time,console.timeEnd结合使用计算函数执行时长
- 例如：`console.time('hello');
      console.timeEnd('hello');`
- 参考：https://umaar.com/dev-tips/83-console-time/

#### 👉 Elements面板：展开所有子元素
- `alt + 鼠标点击元素左侧小箭头`
- 参考：https://umaar.com/dev-tips/18-alt-click-expand-node/

#### 👉 Elements面板：将元素调整到视线中
- 选中元素 → 右键Scroll into view

#### 👉 Elements面板：查看任意节点上的注册事件的函数定义
- 选中元素 → 右侧Event Listeners → 打开任意事件，选中handler → 右键show function definition
- 参考：https://umaar.com/dev-tips/24-view-event-listeners/

#### 👉 Sources面板：快捷键
- `alt + 鼠标选择`：竖向选择
- `ctrl + D`：选中下一个
- `ctrl + U`：取消选中的上一个

#### 👉 Network面板：Filter筛选请求
- `is:running`
- `status-code:200`
- `method:get`
- `domain`
- `larger-than:200`：大于200B
- `-larger-than:20`: 不大于20B