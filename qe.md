### CSS 

- 水平垂直居中

  未知子元素高度，如何垂直居中

- 如何设置渐变色一排小球
- 如何切换主题，注意代码复用

### v-model

### 如何在没有在data里注册该属性的情况下，让他可以具有双向绑定的特性

vue不允许添加根级别的响应式属性，但是可以使用$set来向嵌套对象添加响应式属性。

`Vue.set(vm.someObject, 'b', 2)` 

当这个子属性`b`更新的时候，会触发`someObject`这个对象所绑定的视图更新。也就是：

```js
this.someObject['b'] += 1; //会触发视图更新

this.someObject['a'] += 1; //a是声明someObject时候就有的属性，不会触发视图更新

this.someObject['b'] += 1;
this.someObject['a'] += 1;
//由于在同一个视图更新周期，所以修改b会触发someObject这个对象的数据更新，所以视图中的someObject.a也会更新
```



### vue-router

如何在每次跳转路由时判断是否有权限

> 导航守卫 — 路由正在改变时候的钩子

```javascript
router.beforeEach(beforeEachHook);

function beforeEachHook (to, from, next) {
  // ...
}
```

### 用async/await 实现sleep

```javascript
var sleep = function (time) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve();
        }, time);
    })
};

var start = async function () {
    // 在这里使用起来就像同步代码那样直观
    console.log('start');
    await sleep(3000);
    console.log('end');
};

start();
```

## Third FaCe

1. 实习经历
2. 项目经历

### Koa2

- 中间件实现

  koa2 会预先通过use方法，将请求可能会经过的中间件装在一个数组中。然后通过generator来执行。

- 对比其他框架

  Koa2 非常简洁，需要的功能可以自行引入（比如koa2没有router，而express自带router）koa2运行起来是洋葱模型，`await next()` 之后的代码还会等到下面的中间件执行完之后继续执行。

### Vue Router

- Hash模式
- History模式

### Vue 原理

- 

### Vue VirtualDOM

- Diff 算法

### ElementUI 

- 使用过哪些，如何使用等等.

### HTTP协议

- 缓存
- 响应头，响应码
- 跨域
- XSS、CSRF