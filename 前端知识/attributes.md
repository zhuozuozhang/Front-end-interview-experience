## HTML的节点分类

首先我们要明确一点，属性也是DOM上的一个节点。
拿出HTML页面的节点分类：
|节点类型|nodeType|nodeName|nodeValue|
|--------|--------|--------|---------|
|元素节点    |1 |标签名（大写）|null|
|属性节点    |2 |属性名|属性值|
|文本节点    |3 |#text|文本内容|
|注释节点    |8 |#comment|注释内容|
|文档节点    |9 |#document|null|
|文档类型节点|10|doc-type的名称|null|
|文档片段节点|11|#document-fragment|null|

掏出这个表格之后，一下子就明朗了。property是元素节点上的所有属性，attribute是元素节点的子节点————属性节点。

## HTML的attribute属性

attribute是HTML的属性节点。attribute包含着节点标签里定义的一个个键值对，他们可以自定义，每一个键值对就是一个属性节点。下面是操作属性节点的方法(node是属性的父节点，大部分情况是元素节点)

`node.getAttribute(attr)` getAttribute函数接受一个属性名，如果该节点不存在该属性，则返回null，否则返回属性值。

`node.setAttribute(attr,attrVal)` setAttribute函数接受两个参数，第一个参数是属性名，第二个参数是属性值。

`node.hasAttribute(attr)` hasAttribute函数接受一个参数，存在该属性则返回`true`，否则返回`false`

`node.removeAttribute(attr)` removeAttribute函数接受一个参数，删除该节点的这个属性。（返回值永远是undefined）

`box.getAttributeNames()` getAttributeNames函数返回一个数组，包含该节点的所有属性名。

`box.toggleAttribute(attr)` toggleAttribute 函数是最新标准加入的（18年），用于切换bool属性值。（不能用于普通属性，会在`""`空字符串和`null`之间切换（都会返回false））

```html
<body>
  <div id="box" age="21"></div>
</body>
```

```js
var box = document.querySelector('#box')
box.getAttribute('age')
box.setAttribute('type','dog')
box.hasAttribute('age')
box.removeAttribute('type')
box.getAttributeNames()
```

## JavaScript 上DOM的property属性

```html
<body>
  <div id="box" age="21"></div>
</body>
```

```js
var box = document.querySelector('#box')
console.dir(box)
```

我们定义一个box节点，然后用console.dir(box)打印这个节点的所有属性。展示出来的所有这些属性都是box的property。

```js
div#box
  accessKey: ""
  align: ""
  assignedSlot: null
  attributeStyleMap: StylePropertyMap {size: 0}
  attributes: NamedNodeMap {0: id, 1: age, id: id, age: age, length: 2}
  autocapitalize: ""
  baseURI: "file:///C:/Users/60393/Desktop/WebLearning/test/attribute.html"
  childElementCount: 0
  childNodes: NodeList []
  children: HTMLCollection []
  classList: DOMTokenList [value: ""]
  className: ""
  clientHeight: 0
  clientLeft: 0
  clientTop: 0
  clientWidth: 926
  contentEditable: "inherit"
  dataset: DOMStringMap {}
  dir: ""
  draggable: false
  firstChild: null
  firstElementChild: null
  hidden: false
  id: "box"
  innerHTML: ""
  innerText: ""
  inputMode: ""
  isConnected: true
  isContentEditable: false
  lang: ""
  lastChild: null
  lastElementChild: null
  localName: "div"
  namespaceURI: "http://www.w3.org/1999/xhtml"
  nextElementSibling: script
  nextSibling: text
  nodeName: "DIV"
  nodeType: 1
  nodeValue: null
  nonce: ""
  offsetHeight: 0
  offsetLeft: 8
  offsetParent: body
  offsetTop: 8
  offsetWidth: 926
  onabort: null
  onauxclick: null
  onbeforecopy: null
  onbeforecut: null
  onbeforepaste: null
  onblur: null
  oncancel: null
  oncanplay: null
  oncanplaythrough: null
  onchange: null
  onclick: null
  onclose: null
  oncontextmenu: null
  oncopy: null
  oncuechange: null
  oncut: null
  ondblclick: null
  ondrag: null
  ondragend: null
  ondragenter: null
  ondragleave: null
  ondragover: null
  ondragstart: null
  ondrop: null
  ondurationchange: null
  onemptied: null
  onended: null
  onerror: null
  onfocus: null
  onfullscreenchange: null
  onfullscreenerror: null
  ongotpointercapture: null
  oninput: null
  oninvalid: null
  onkeydown: null
  onkeypress: null
  onkeyup: null
  onload: null
  onloadeddata: null
  onloadedmetadata: null
  onloadstart: null
  onlostpointercapture: null
  onmousedown: null
  onmouseenter: null
  onmouseleave: null
  onmousemove: null
  onmouseout: null
  onmouseover: null
  onmouseup: null
  onmousewheel: null
  onpaste: null
  onpause: null
  onplay: null
  onplaying: null
  onpointercancel: null
  onpointerdown: null
  onpointerenter: null
  onpointerleave: null
  onpointermove: null
  onpointerout: null
  onpointerover: null
  onpointerup: null
  onprogress: null
  onratechange: null
  onreset: null
  onresize: null
  onscroll: null
  onsearch: null
  onseeked: null
  onseeking: null
  onselect: null
  onselectionchange: null
  onselectstart: null
  onstalled: null
  onsubmit: null
  onsuspend: null
  ontimeupdate: null
  ontoggle: null
  onvolumechange: null
  onwaiting: null
  onwebkitfullscreenchange: null
  onwebkitfullscreenerror: null
  onwheel: null
  outerHTML: "<div id="box" age=""></div>"
  outerText: ""
  ownerDocument: document
  parentElement: body
  parentNode: body
  part: DOMTokenList [value: ""]
  prefix: null
  previousElementSibling: null
  previousSibling: text
  scrollHeight: 0
  scrollLeft: 0
  scrollTop: 0
  scrollWidth: 926
  shadowRoot: null
  slot: ""
  spellcheck: true
  style: CSSStyleDeclaration {alignContent: "", alignItems: "", alignSelf: "", alignmentBaseline: "", all: "", …}
  tabIndex: -1
  tagName: "DIV"
  textContent: ""
  title: ""
  translate: true
  __proto__: HTMLDivElement
```

END.