### sort( ) 数组排序

::: tip

查看此部分时，建议copy代码在控制台查看效果

:::

#### 1. 简介

- 语法：`arrayObject.sort(sortby)`

- 作用：用于对数组的元素进行排序

- 参数：
  - sortBy：可选，函数，接收两个参数
- 返回值：排序后的原数组
- 注意：会修改原数组，不生成新的数组



#### 2. 排序机制

- 不传参
  - 按照字符编码顺序进行排序

```javascript
var arr = ["George", "John", "Thomas", "James", "Adrew", "Martin"];
arr.sort();
console.log(arr); // ["Adrew", "George", "James", "John", "Martin", "Thomas"]

var arr2 = ["50", "10", "111", "74", "3", "2"];
arr2.sort();
console.log(arr2); // ["10", "111", "2", "3", "50", "74"]
```

- 传参，比较函数
  - 比较函数接受两个参数，原理是将数组中的所有元素进行两两比较，依据返回值与0的大小来确定排序顺序

```javascript
var arr3 = ["50", "10", "111", "74", "3", "2"];
arr3.sort(sortNumber);
console.log(arr3); // ["2", "3", "10", "50", "74", "111"]

function sortNumber(a, b) { // 升序排列
  return a - b;
}
```



#### 3. 延申使用

- 随机打乱数组

```javascript
// Shuffle array helper
const shuffleArray = arr => arr
  .map(a => [Math.random(), a])
  .sort((a, b) => a[0] - b[0])
  .map(a => a[1]);

let ids = ['A', 'B', 'C', 'D', 'E']；
let newIds = shuffleArray(ids)；
console.log(newIds)；
```

解析：

1. 第一步，给函数传入arr
2. 第二步，返回一个新的数组，数组里每个元素都是一个数组，由一个随机数和原元素组成，格式为：` [ [随机数, 'A'],  [随机数, 'B'], [随机数, 'C'], [随机数, 'D'],  [随机数, 'E'] ]`

3. 第三步，对第二步得到的数组进行排序，比较函数由每个元素中随机数的大小来决定
4. 第四步，遍历数组，返回每个数组的第二个元素，组成新的数组，即打乱后的数组。



- 依据对象属性值排序

```javascript
const sortArr = arr => arr.slice()
  .sort((a, b) => a.age - b.age)

let arr = [{ name: '张三', age: 22 }, { name: '李四', age: 20 }, { name: '王五', age: 17 }, { name: '赵六', age: 34 }, { name: '钱七', age: 25 }, { name: '孙巴', age: 27 }];
const newArr = sortArr(arr);
console.table(arr); // 不变
console.table(newArr)； // 依据年龄从小到大排序
```

