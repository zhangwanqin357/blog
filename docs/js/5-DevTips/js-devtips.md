### JavaScript开发中可能常用的一些小技巧

[[toc]]

#### 1. 逻辑运算符：与（&&） 或（||）

- a( ) && b( )
  - a ：true, 执行b,返回b结果

  - a： false, 返回a结果
  - 例如：1 && 2  ===> 2
  - 例如：0 && 2  ===> 0

- a( ) || b( ) 
  - a ：true, 返回a结果
  - a：false, 执行b,返回b结果
  - 例如：1 || 2  ===> 1
  - 例如：0 || 2 ===> 2

```js
// 更新监控数据
export const updateMonitorData = (state, data) => {
  data && (state.monitorData = data)
}
```

