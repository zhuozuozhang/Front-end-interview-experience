### Koa2 中间件

### 服务端部署，多核Docker

### CSS

- 选择器

  - 知道的选择器

  - 选择器的效率

    1. ID选择器 比如#header

    2. 类选择器 比如.promo

    3. 元素选择器 比如 div

    4. 兄弟选择器 比如 h2 + p

    5. 子选择器 比如 li > ul

    6. 后代选择器 比如 ul a 7. 通用选择器 比如 *

    7. 属性选择器 比如 type = “text”

    8. 伪类/伪元素选择器 比如 a:hover

  - 选择器的选择顺序

    **从右向左** 

- 

- margin重叠 解决方式

- 移动端适配问题

- px大小不同怎么办

- rem换算不对怎么办

  https://blog.csdn.net/u013778905/article/details/77972841

  出现情况：

  1.用rem布局的H5页面 
  2.页面内嵌在APP的webview中 
  3.手机 **设置** 修改了默认字体大小，如下图我的小米手机示例。

  

  有些安卓手机上，浏览器或webview的默认字体是随着系统字体改变的，所以可能会导致默认字体不等于16px

  在页面rem计算完成后，用两种方式获取font-size。然后结果不一样，导致某些元素通过rem计算后的值，产生了误差

  通过比较**document.documentElement.style.fontSize**和window.getComputedStyle(document.documentElement)["font-size"]的差值，如果误差大于1，我们就重置html的font-size



### 浏览器

- **浏览器渲染方式**

- **img在哪个步骤加载**

- **display：none会不会加载资源**

- **CSS，空元素设置background 会不会加载资源**

- Diplay:none, visibility:hidden，background 会不会加载资源

  - img标签 display:none — 大多数浏览器会加载
  - background, display: none — 不会加载
  - Visibility: hidden 和普通一样加载。

  实际上！！！真正的资源加载顺序

  - 解析HTML【遇到`<img>`标签加载图片】 —> 构建DOM树
  - 加载样式 —> 解析样式【遇到背景图片链接不加载】 —> 构建样式规则树
  - 加载javascript —> 执行javascript代码
  - 把DOM树和样式规则树匹配构建渲染树【遍历DOM树时加载对应样式规则上的背景图片】
  - 计算元素位置进行布局
  - 绘制【开始渲染图片】

  实践 — 占位图

  当使用样式表中的背景图片作为占位符时，要把背景图片转为base64格式。这是因为背景图片加载的顺序在`<img>`标签后面，背景图片可能会在`<img>`标签图片加载完成后才开始加载，达不到想要的效果。

- **回流/重排和重绘**

  - 重绘不一定触发重排。重排很耗性能。

  - 我的弹幕功能优化，每一帧进行一次重排，而不是每条弹幕移动都去进行一次重排。也就是每一次循环计算先把结果放到一个数组中，然后一次性修改所有CSS，这样把写CSS的操作放到一起，会大大减少重排次数，提高性能。

  - 使用`window.requestAnimationFrame()`。它会在页面下一次渲染时执行。所有的写操作都会在页面下一次刷新重新渲染时候执行。通过时间函数来计算当前时间，来更改弹幕位置。

  - `requestIdleCallback`函数。会在某帧末尾有空闲时间的时候来执行回调函数。

    

### HTML

- 缓存，响应头
  - 强缓存
  - 协商缓存
- session
- cookie 
  - 前端是否能修改cookie?
- localStorage,sessionStorage

