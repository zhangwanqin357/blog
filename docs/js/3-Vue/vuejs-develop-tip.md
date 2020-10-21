### Vuejs中开发知识

#### 组件中，当组件挂载(mounted)之后，可以通过`this.$el`获取到组件的根元素，等同于`document.getElementById()`,`this.$ref`

```
<template>
  <div style="width: 175px; height: 175px;"></div>
</template>
<script>
export default {
  ...
  methods: {
    initChart (){
      this.myChart = echarts.init(this.$el) // 此处获取到根div
    }
  }
  ...
</script>
```

#### 监听$route

```
watch: {
  '$route': { // watcher值是包含选项的对象
    immediate: true, // 选项，立即以表达式的当前值触发回调
    handler (to) {
      if (to.name === 'monitor') {
        this.getData()
      }
    }
  }
},
```

#### vue-router路由组件传参

在配置router路由的时候，每一个路由配置，都可以设置一个参数`props`，用于路由向组件传参，

例如，在路由中进行如下配置

```
const router = new VueRouter({
  routes: [
    { path: '/user/:id', component: User, props: true }
  ]
})
```

结果，在组件`User`中，就可以通过`props: ['id']`这样的语法来访问这个id参数，此时的id与父子组件传递props是一样的使用（功能等同于`$route.params.id`，优势是实现了组件和路由的解耦）

例子：

```
// route.js
{path: 'analysis/:pipline/:device/:time, props: true, component: load('analysis/layout')}
//layout.vue
props: ['pipline', 'device', 'time']
```

