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

### Vue Router 原理

​	先要明白Vue是一个单页面应用（SPA）。他在加载页面时，不会加载整个页面，而是只更新页面中的某些制定内容组件。**SPA的一个基本概念是，他在更新视图时不会重新请求页面。** `vue-router`实现单页面前端路由提供了两种方式，History模式和Hash模式。

- Hash模式

  默认使用hash模式，他使用url的hash来模拟一个完整的URL，#是URL的锚点，代表网页中的一个位置，所以改变#后面的部分只是告知网页滚动到相应的位置，而不会重新请求加载页面。但是会在浏览器中增加一个访问记录，可以通过后退按钮回退到上一个浏览的位置。而vue-router通过`window.onhashchange`这个事件来检测hash值的变化，从而渲染制定的组件。

- History模式

  这种模式充分利用了html5 新增的 history 特性，通过`history.pushState()`和`history.replaceState()`来修改浏览器的记录栈。改变当前的URL而不向后端发起请求。

  但是这种方式需要后端配合，因为如果用户直接向浏览器中输入某个路由对应的URL进行访问时，后端找不到对应的资源就会返回404.所以服务端需要增加一个配置—在URL匹配不到静态资源时，应该返回同一个`index.html`页面。

### Vue 原理

- `Object.defineProperty()`、`object.proxy()`
- 发布订阅者模式

### Vue VirtualDOM

- Diff 算法

### ElementUI 

- 使用过哪些，如何使用等等.

### HTTP协议

- 缓存

- 响应头，[响应码](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status)

  - 200 Success
  - 201 Created
  - 202 Accepted
  - 204 No Content
  - 301 Moved Permanently
  - 302 Found
  - 304 Not Modified
  - 400 Bad Request
  - 401 Unauthorized
  - 403 Forbidden
  - 404 Not Found
  - 500 Internal Server Error
  - 501 Not Implemented
  - 502 Bad Gateway
  - 503 Service Unavailable
  - 504 Gateway Timeout

- 跨域

- **注意 ！ img标签是不受同源策略的限制，可以跨域加载资源。**

- XSS攻击

  XSS即 Cross Site Script 即跨站脚本攻击，XSS攻击指攻击者在网站上注入恶意代码，通过恶意脚本对客户端网页进行篡改，从而在用户浏览网页时，对浏览器进行控制或者获取用户隐私数据。

  攻击行为会将一些隐私数据比如cookie、session发送给攻击者、将受害者重定向到一个攻击者控制的网站等。

  **防范** 

  - HttpOnly 防止截取Cookie。浏览器将禁止页面的Javascript访问带有HttpOnly属性的Cookie。所以阻止了XSS攻击后的Cookie劫持攻击。

  - 输入检查。对用户输入进行检查、过滤、转义。

    ```js
    // 在 vuejs 中，如果输入带 script 标签的内容，会直接过滤掉
    const decodingMap = {
      '&lt;': '<',
      '&gt;': '>',
      '&quot;': '"',
      '&amp;': '&',
      '&#10;': '\n'
    }
    ```

    - 输出检查。

- CSRF 跨站请求伪造。

  - 浏览器的Cookie策略

    Cookie是服务器发送到浏览器并且保存在本地的一些数据，他会在浏览器下一次向同一服务器发起请求时被携带并发送到服务器上。

    浏览器上的Cookie分为两种，SessionCookie和Permanent Cookie。分别是会话期Cookie和持久性Cookie。后者需要制定一个过期时间或者有效期。

    此外，每个Cookie有与之关联的域，这个域一般通过domain属性来指定。如果Cookie和页面的域相同，则是第一方Cookie，如果Cookie和页面的域不同，则是第三方Cookie。

  - CSRF攻击

    攻击者使用一个img标签，指向一个攻击环境的链接，如果用户点击这个标签访问到攻击环境，则会向服务器发起这个URL代表的请求，比如 向服务器发送请求删除资源 这个请求携带了用户的Cookie所以会被服务器验证通过。

    攻击者借助受害者的Cookie骗取服务器的信任，但并不能拿到Cookie，也看不到Cookie的内容。只能给服务器发送请求来执行请求中描述的命令，来改变服务端的数据。

    **防范** 

    **验证码** — CSRF攻击往往是用户在不知情的情况下构造了网络请求。二验证码强制用户与应用进行交互才能完成请求。

    **Referer Check** HTTP头中有一个Referer字段，记录了该请求来源的地址。所以如果请求来自非法的源，那么就可以阻止这次请求。

    **Token 验证** 在请求中放入攻击者不能伪造的信息，并且该信息不存在Cookie中。比如在URL参数中加入一个随机产生的Token，服务端验证这个Token是否正确。