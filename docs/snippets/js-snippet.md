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

