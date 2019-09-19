cors

出于安全原因，浏览器限制从脚本内发起的跨源HTTP请求。 例如，XMLHttpRequest和Fetch API遵循同源策略。 这意味着使用这些API的Web应用程序只能从加载应用程序的同一个域请求HTTP资源，除非响应报文包含了正确CORS响应头。

什么情况下需要 CORS ？

跨域资源共享标准（ cross-origin sharing standard ）允许在下列场景中使用跨域 HTTP 请求：

前文提到的由 XMLHttpRequest 或 Fetch 发起的跨域 HTTP 请求。

Web 字体 (CSS 中通过 @font-face 使用跨域字体资源), 因此，网站就可以发布 TrueType 字体资源，并只允许已授权网站进行跨站调用。

WebGL 贴图

使用 drawImage 将 Images/video 画面绘制到 canvas

功能概述

- 简单请求

使用下列方法之一：

  GET
  
  HEAD
  
  POST
  
Fetch 规范定义了对 CORS 安全的首部字段集合，不得人为设置该集合之外的其他首部字段。该集合为：

  Accept
  
  Accept-Language
  
  Content-Language
  
  Content-Type （需要注意额外的限制）
  
  DPR
  
  Downlink
  
  Save-Data
  
  Viewport-Width
  
  Width
  
Content-Type 的值仅限于下列三者之一：

  text/plain
  
  multipart/form-data
  
  application/x-www-form-urlencoded
  
请求中的任意XMLHttpRequestUpload 对象均没有注册任何事件监听器；XMLHttpRequestUpload 对象可以使用 XMLHttpRequest.upload 属性访问。

请求中没有使用 ReadableStream 对象。

- 预检请求

  不满足普通请求的请求需要先向服务端发起一个OPTIONS预检请求，以获知服务器是否允许该实际请求。"预检请求“的使用，可以避免跨域请求对服务器的用户数据产生未预期的影响。
  
  预检请求完成之后，发送实际请求.

- 附带身份凭证的请求

Fetch 与 CORS 的一个有趣的特性是，可以基于  HTTP cookies 和 HTTP 认证信息发送身份凭证。一般而言，对于跨域 XMLHttpRequest 或 Fetch 请求，浏览器不会发送身份凭证信息。如果要发送凭证信息，需要设置 XMLHttpRequest 的某个特殊标志位。

对于附带身份凭证的请求，服务器不得设置 Access-Control-Allow-Origin 的值为“*”。

将XMLHttpRequest 的 withCredentials 标志设置为 true，从而向服务器发送 Cookies。

启用了CORS的图片

HTML 规范中图片有一个 crossorigin 属性，结合合适的 CORS 响应头，就可以实现在画布中使用跨域 <img> 元素的图像。

什么是“被污染”的 canvas?

  尽管不通过 CORS 就可以在画布中使用图片，但是这会污染画布。一旦画布被污染，你就无法读取其数据。例如，你不能再使用画布的 toBlob(), toDataURL() 或 getImageData() 方法，调用它们会抛出安全错误。所以需要设置图片的crossOrigin = "Anonymous"这个属性以启用对这个图片所在的画布的编辑。

