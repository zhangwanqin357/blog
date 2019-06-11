### JavaScript Snippets
[[toc]]

#### 打乱数组

```javascript
// 打乱数组
// Shuffle array helper
const shuffleArray = arr => arr
  .map(a => [Math.random(), a])
  .sort((a, b) => a[0] - b[0])
  .map(a => a[1]);
```

#### 合并去重两个数组

```javascript
// 合并去重两个数组
function mergeArray (arr1, arr2) {
    let _arr = []
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== '') {
        	_arr.push(arr1[i])
        }
    }
    for (let i = 0; i < arr2.length; i++) {
        let flag = true
        for (let j = 0; j < arr1.length; j++) {
            if (arr2[i].name === arr1[j].name) { //根据某一属性判断是否存在
                flag = false
                break
            }
    	}
        if (flag && arr2[i] !== '') {
            _arr.push(arr2[i])
        }
    }
    return _arr
}

let arr1 = [{ name: '张三', age: 22 }, { name: '李四', age: 20 }, { name: '王五', age: 17 }, { name: '赵六', age: 34 }, { name: '钱七', age: 25 }, { name: '孙巴', age: 27 }];
let arr2 = [{ name: 'George', age: 34 }, { name: 'Andy', age: 16 }, { name: '王五', age: 17 }, { name: '赵六', age: 34 }, { name: '钱七', age: 25 }, { name: 'Dude', age: 41 }];

let newArr = mergeArray(arr1, arr2);
console.table(newArr);
```

#### 从一个由对象组成的数组中删除另一个数组中存在的对象
应用场景：从一个列表中删除另一个列表中的元素
```
// 目的：从arr2中删除arr1中与arr2匹配的元素
let arr1 = [
  { code: "123456781",color: "芭比粉"},
  { code: "123456783",color: "芭比粉"},
  { code: "123456785",color: "芭比粉"}
];
let arr2 = [
  { code: "123456781",color: "芭比粉"},
  { code: "123456782",color: "芭比粉"},
  { code: "123456783",color: "芭比粉"},
  { code: "123456784",color: "芭比粉"},
  { code: "123456785",color: "芭比粉"},
  { code: "123456786",color: "芭比粉"}
]
/*
* every方法，只要有一项不满足条件就返回false，也就是说必须每一项都得满足才能返回true。返回的是布尔值。
* filter方法，只要条件满足，我就将此元素返回出去，返回的是元素。
* 在本示例中，只要arr1中存在与arr2中相同的元素，我就返回false。也就是说，我拿着arr2中
* 的第一项去和arr1中的每一项去比较，如果code都不相等，满足所有条件，我就返回true。
* 在filter中，只要条件为true，我就将这一项返回出去，就实现了批量删除的效果。
*/
let arr3 = arr2.filter(item=>{
  return arr1.every(item2=>{
    return item.code != item2.code;
  })
})
console.log(arr1,'arr1');
console.log(arr2,'arr2');
console.log(arr3,'arr3');
```
