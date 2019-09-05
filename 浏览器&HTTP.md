# Referrer Policy

当用户在浏览器上点击一个链接时，会产生一个 HTTP 请求，用于获取新的页面内容，而在该请求的报头中，会包含一个 Referrer，用以指定该请求是从哪个页面跳转页来的，常被用于分析用户来源等信息。但是也有成为用户的一个不安全因素，比如有些网站直接将 sessionid 或是 token 放在地址栏里传递的，会原样不动地当作 Referrer 报头的内容传递给第三方网站。
Referrer Policy 用于过滤 Referrer 报头内容。

```js
enum ReferrerPolicy {
  "",
  "no-referrer",
  "no-referrer-when-downgrade", //默认
  "same-origin",
  "origin",
  "strict-origin",
  "origin-when-cross-origin",
  "strict-origin-when-cross-origin",
  "unsafe-url"
};
```

# Manifest

https://yanhaijing.com/html/2014/12/28/html5-manifest/

HTML5的离线缓存。

## 什么是Cache Manifest

首先manifest是一个后缀名为minifest的文件，在文件中定义那些需要缓存的文件，支持manifest的浏览器，会将按照manifest文件的规则，像文件保存在本地，从而在没有网络链接的情况下，也能访问页面。

当我们第一次正确配置app cache后，当我们再次访问该应用时，浏览器会首先检查manifest文件是否有变动，如果有变动就会把相应的变得跟新下来，同时改变浏览器里面的app cache，如果没有变动，就会直接把app cache的资源返回。

## Manifest的特点

- 离线浏览: 用户可以在离线状态下浏览网站内容。
- 更快的速度: 因为数据被存储在本地，所以速度会更快.
- 减轻服务器的负载: 浏览器只会下载在服务器上发生改变的资源。

## 如何使用

html新增了一个manifest属性，可以用来指定当前页面的manifest文件。

创建一个和html同名的manifest文件，比如页面为index.html，那么可以建一个index.manifest的文件，然后给index.html的html标签添加如下属性即可：

```html
<html lang="en" manifest="index.manifest">
```

## Content-Type

## 请求方法

GET
- GET方法请求一个指定资源的表示形式. 使用GET的请求应该只被用于获取数据.
HEAD
- HEAD方法请求一个与GET请求的响应相同的响应，但没有响应体.
POST
- POST方法用于将实体提交到指定的资源，通常导致在服务器上的状态变化或副作用. 
PUT
- PUT方法用请求有效载荷替换目标资源的所有当前表示。
DELETE
- DELETE方法删除指定的资源。
CONNECT
- CONNECT方法建立一个到由目标资源标识的服务器的隧道。

OPTIONS
- OPTIONS方法用于描述目标资源的通信选项。
    应用：
    1. 询问服务器可以使用的请求方法，服务器会返回Allow响应字段来告知可以使用的方法。
    2. Cors跨域的预检
    
      Access-Control-Request-Method: POST 
      
      Access-Control-Request-Headers: X-PINGOTHER, Content-Type
      
      Option请求带有这两个属性来询问服务器是否可以进行POST方法的跨域请求，并且在请求头中带有X-PINGOTHER和Content-Type这两个属性。
      
TRACE
- TRACE方法沿着到目标资源的路径执行一个消息环回测试。
PATCH
- PATCH方法用于对资源应用部分修改。

