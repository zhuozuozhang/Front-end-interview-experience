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

Content-Type告诉浏览器资源的MIME类型，这样浏览器就知道如何去解析得到的资源了。

格式： type/subtype
- text ---  表明文件是普通文本，理论上是人类可读 text/html, text/plain,  text/css, text/javascript
- image --- 表明是某种图像。不包括视频，但是动态图（比如动态gif）也使用image类型 image/gif, image/png, image/jpeg, image/bmp, image/webp, image/x-icon, image/vnd.microsoft.icon
- audio --- 表明是某种音频文件 	audio/midi, audio/mpeg, audio/webm, audio/ogg, audio/wav
- video --- 表明是某种视频文件   video/webm, video/ogg
- application 表明是某种二进制数据	 application/json, application/x-www-form-urlencoded
- multipart/formdata
- multipart/byteranges

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

## HTTP2 

https://developers.google.com/web/fundamentals/performance/http2/?hl=zh-cn#%E4%BA%8C%E8%BF%9B%E5%88%B6%E5%88%86%E5%B8%A7%E5%B1%82

> HTTP/2 通过支持标头字段压缩和在同一连接上 进行多个并发交换，让应用更有效地利用网络资源，减少 感知的延迟时间。具体来说，它可以对同一连接上的请求和响应消息进行交错 发送并为 HTTP 标头字段使用 有效编码。 > HTTP/2 还允许为请求设置优先级，让更重要的请求更快速地完成，从而进一步 提升性能。出台的协议更有利于网络，因为与 HTTP/1.x 相比，可以使用更少的 TCP 连接。 > 这意味着与其他流的竞争减小，并且连接的持续时间变长，这些特性反过来提高 了可用网络容量的利用率。 最后，HTTP/2 还可以通过使用二进制消息分帧对消息进行更高效 的处理。 （超文本传输协议版本 2，草案 17）

二进制分帧层：

数据流：已建立的连接内的双向字节流，可以承载一条或多条消息。

消息：与逻辑请求或响应消息对应的完整的一系列帧。

帧：HTTP/2 通信的最小单位，每个帧都包含帧头，至少也会标识出当前帧所属的数据流。

多路复用：一个TCP连接可以

在HTTP 1.0中，客户端的每一个HTTP请求都必须通过独立的TCP连接进行处理，而在HTTP 1.1中，对这种方式进行了改进。客户端可以在一个TCP连接中发送多个HTTP请求，这种技术叫做HTTP复用（HTTP Multiplexing）。它与TCP连接复用最根本的区别在于，TCP连接复用是将多个客户端的HTTP请求复用到一个服务器端TCP连接上，而HTTP复用则是一个客户端的多个HTTP请求通过一个TCP连接进行处理。前者是负载均衡设备的独特功能；而后者是HTTP 1.1协议所支持的新功能，目前被大多数浏览器所支持。在HTTP2.0中，客户端和服务器可以将 HTTP 消息分解为互不依赖的帧，然后交错发送，最后再在另一端把它们重新组装起来。

多路复用与keep-alive的区别：
![](https://qiniu.nihaoshijie.com.cn/kp2.png)

1）线头阻塞（Head-of-Line Blocking），HTTP1.X虽然可以采用keep alive来解决复用TCP的问题，但是还是无法解决请求阻塞问题。

2）所谓请求阻塞意思就是一条TCP的connection在同一时间只能允许一个请求经过，这样假如后续请求想要复用这个链接就必须等到前一个完成才行，正如上图左边表示的。

3）之所以有这个问题就是因为HTTP1.x需要每条请求都是可是识别，按顺序发送，否则server就无法判断该相应哪个具体的请求。

4）HTTP2采用多路复用是指，在同一个域名下，开启一个TCP的connection，每个请求以stream的方式传输，每个stream有唯一标识，connection一旦建立，后续的请求都可以复用这个connection并且可以同时发送，server端可以根据stream的唯一标识来相应对应的请求。

 

![](https://developers.google.com/web/fundamentals/performance/http2/images/multiplexing01.svg?hl=zh-cn)

多路复用的好处是:

 - 并行交错地发送多个请求，请求之间互不影响。
- 并行交错地发送多个响应，响应之间互不干扰。
- 使用一个连接并行发送多个请求和响应。
- 不必再为绕过 HTTP/1.x 限制而做很多工作（请参阅针对 HTTP/1.x 进行优化，例如级联文件、image sprites 和域名分片。
- 消除不必要的延迟和提高现有网络容量的利用率，从而减少页面加载时间。

HTTP/2 中的新二进制分帧层解决了 HTTP/1.x 中存在的队首阻塞问题，也消除了并行处理和发送请求及响应时对多个连接的依赖。 结果，应用速度更快、开发更简单、部署成本更低。

数据流优先级


HTTP/3 (QUIC/Quick UDP Internet Connections)

HTTP/3 是即将到来的第三个主要版本的HTTP协议，使用于万维网。在HTTP/3中，将弃用TCP协议，改为使用基于UDP协议的QUIC协议实现。QUIC（快速UDP网络连接）是一种实验性的传输层网络传输协议，由Google开发，该协议旨在取代TCP协议，使网页传输更快。

在2018年10月28日的邮件列表讨论中，互联网工程任务组（IETF） HTTP和QUIC工作组主席Mark Nottingham提出了将HTTP-over-QUIC更名为HTTP/3的正式请求，以“明确地将其标识为HTTP语义的另一个绑定……使人们理解它与QUIC的不同”，并在最终确定并发布草案后，将QUIC工作组继承到HTTP工作组。[2] 在随后的几天讨论中，Mark Nottingham的提议得到了IETF成员的接受，他们在2018年11月给出了官方批准，认可HTTP-over-QUIC成为HTTP/3。[3]


