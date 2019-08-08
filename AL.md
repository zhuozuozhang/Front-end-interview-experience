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

- Diplay:none, visibility:hidden

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

- 浏览器渲染方式
- img在哪个步骤加载
- display：none会不会加载资源
- CSS，空元素设置background 会不会加载资源
- 

### HTML

- 缓存，响应头
  - 强缓存
  - 协商缓存
- session
- cookie 
  - 前端是否能修改cookie?
- localStorage,sessionStorage

