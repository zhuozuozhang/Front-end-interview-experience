## Cookie 和 Session 的区别和联系

首先 cookie 是储存在客户端的，session是储存在服务器端的。

Cookie主要用于以下三个方面：

- 会话状态管理（如用户登录状态、购物车、游戏分数或其它需要记录的信息）

- 个性化设置（如用户自定义设置、主题等）

- 浏览器行为跟踪（如跟踪分析用户行为等）

### cookie

cookie是客户端保存用户信息的一种机制，用来记录用户的一些信息。实际上就是客户端本地储存的一段文本，随着每次请求发送给服务器。

因为http协议是无状态的协议，服务器无法通过网络连接得知客户的身份，因此cookie就是用来记录客户身份的凭证。

cookie通过请求和响应报文中的cookie信息来控制客户端的状态。

- 响应报文中，set-cookie这个首部信息通知客户端保存cookie。当下次客户端再向服务端发起请求的时候，客户端会自动在请求报文中加入cookie值。之后服务端获取到请求，通过cookie得到之前的状态信息。

#### 会话期cookie

- cookie如果没有设置expires过期值，那么它将在浏览器关闭之前有效。这个就是会话期的cookie

#### 持久性cookie

设置了expires 或者 max-age 的cookie

#### HttpOnly

设置了HttpOnly属性的cookie不会被客户端的JavaScript脚本调用，因此他的作用只是记录状态，并在请求时候发送给服务端。

#### Secure

设置了Secure属性的cookie只应该通过Https协议发送给服务器。

#### Cookie的作用域

- `Domain` Cookie 的Domain属性标识了那些主机可以接受Cookie，如果不指定，那么默认为当前主机（不包含子域名）。 但是Domain不能设置其他域名。

- `Path` Cookie 的Path 属性制定了主机下的哪些路径可以接受Cookie，子路径也会被匹配。

### session

session是保存在服务端的一个数据结构，用来跟踪用户的状态。通常要借助cookie来实现。
