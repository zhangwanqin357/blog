### Vue插件：create-keyframe-animation

> @2018-06-01

#### 1.简介
- 功能：使用JavaScript在浏览器中动态的生成CSS关键帧动画
- 表现：使用JS编写，最终生成带有CSS关键帧动画的`<style>`标签，并插入`<head>`标签中
- 问题：这只是实验性的功能

#### 2.使用
- 安装：`npm install create-keyframe-animation`
- 引入：`import animations from 'create-keyframe-animation'`
- 获取位置：起点相对于终点（将终点的位置假定为（0，0，0））的相对位置，右、下为正，坐、上为负
- 定义动画帧数
- 注册动画：

```javascript
  animations.registerAnimation({
  	name: '', // 动画名称,String，必须
      animation: {} | [], // 动画效果，Object|Array，详细见第3点
      presets: { // 预设，值都是默认值
          duration: 1000, // 动画时间，ms ✔️
          fillMode: 'both', // animation-fill-mode属性
          easing: 'ease', // 缓动方式 ✔️
          iterations: 1, // 动画执行次数
          delay: 0, // 延迟
          direction: 'normal', // 动画方向
          resetWhenDone: false, // true表示将动画的最终状态设置为transform属性
          clearTransformsBeforeStart: false // 是否在动画开始前清楚现有的transforms
      }
  })
```

- 运行动画：

```
animations.runAnimation(el, name, [callback])
// el: 需要执行动画的dom节点，可以是一个元素，也可以是一个元素数组，或者是querySelectorAll的结果
// name: 如果是字符串，就是动画的名称；如果是对象，需要包含这个名称
// callback：当 animationend 事件结束时调用
// 返回值：如果在全局window对象上存在Promise而且没有传入callback的话，返回一个Promise对象

animations.runAnimation(document.querySelectorAll('.dots'), {
	name: 'wiggle',
	delay: 1500 // 在这里可以重写上面的presets
}, function () {
	console.log('done!')
})
```



#### 3. animation定义

- 可以是Object或者Array
- 如果是Object，key就是关键帧；如果是Array，关键帧的百分比根据index线性计算
- 以下几种情况完全相同：

```javascript
animation: {
    start: [0, 0],
    end: [1, 1]
}
animation: {
    0: [0, 0],
    100: [1, 1]
}
animation: {
    '0%': [0, 0],
    '100%': [1, 1]
}
animation: [[0, 0], [1, 1]]
```

- 位置参数总是被假定为px

```
animation: [
    {
        x: 0,
        y: 0,
        opacity: 0,
        scale: 0.5
    },
    {
        x: 1,
        y: 1,
        opacity: 0.8,
        scale: 2
    }
]
```

#### 例子

```javascript
// .....
enter (el, done) {
    const { x, y, scale } = this._getPosAndScale()

    let animation = { // 定义动画
        0: {
            transform: `translate3d(${x}px,${y}px,0) scale(${scale})`
        },
        60: {
            transform: `translate3d(0,0,0) scale(1.1)`
        },
        100: {
            transform: `translate3d(0,0,0) scale(1)`
        }
    }

    animations.registerAnimation({ // 注册动画
        name: 'move', // 动画名称
        animation, // 动画
        presets: { // 预设
            duration: 400, // 动画间隔
            easing: 'linear' // 缓动
        }
    })

    animations.runAnimation(this.$refs.cdWrapper, 'move', done) // 运行动画,el就是需要动画的对象,done执行之后会跳转到afterEnter钩子
},
afterEnter (el) {
    animations.unregisterAnimation('move') // 动画执行完之后
    this.$refs.cdWrapper.style.animation = '' // 清空动画
},
leave (el, done) { // 离开的时候，不需要使用animation放大再变小的动画效果，就直接设置transform
    this.$refs.cdWrapper.style.transition = `all 0.4s`
    const {x, y, scale} = this._getPosAndScale()
    this.$refs.cdWrapper.style[transform] = `translate3d(${x}px,${y}px,0) scale(${scale})`
    this.$refs.cdWrapper.addEventListener('transitionend', done) // 监听过渡效果结束了之后，就执行done
},
afterLeave (el) {
    this.$refs.cdWrapper.style.transition = ''
    this.$refs.cdWrapper.style[transform] = ''
},
_getPosAndScale () { // 获取两W个大小图片的初始位置以及缩放比例
    // 小图片
    const targetWidth = 40
    const paddingLeft = 40
    const paddingBottom = 30
    // 大图片
    const paddingTop = 80
    const width = window.innerWidth * 0.8 // 大图标的宽度
    const scale = targetWidth / width
    const x = -(window.innerWidth / 2 - paddingLeft)
    const y = window.innerHeight - paddingTop - width / 2 - paddingBottom
    return {
        x,
        y,
        scale
    }
},
// .....
```

> 参考链接：https://github.com/HenrikJoreteg/create-keyframe-animation