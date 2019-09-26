# CSS相关知识

Position: sticky

Shape-outside (float用)，可以把该元素的轮廓变成圆形

Outline. (除了该元素之外的内容)

Background-attachment ：fixed 背景不跟着内容移动。这个时候背景定位是相对于视口的。

图片比例不变

​当设置图片宽高时，比例会被缩放，可以设置`object-fit:contain` 来使图片比例不变（多出来的空间会留白）

`filter:blur(2px)` 虚化

​自适应宽高

​`width:fill-available` 填充整个空间

​`fill-available`填充整个空间

​`max-content`表示采用内部元素宽度值最大的那个元素的宽度作为最终容器的宽度。如果出现文本，则相当于文本不换行

​`min-content` 采用内部元素最小宽度值最大的那个元素的宽度作为最终容器的宽度

​`fit-content`将元素宽度收缩为内容宽度

inline 元素的高度永远都不会撑开他的父元素，垂直方向上的border、padding和margin只会和上下的内容覆盖，不会占据大小。  

inline-block 元素的高度和普通block元素一样，如果比父元素的高度要大，将会把父元素撑开。

`user-select: none`设置了这个属性的元素不会被选中。

## BFC布局规则

* 内部的Box会在垂直方向，一个接一个地放置。
* Box垂直方向的距离由margin决定。属于同一个BFC的两个相邻Box的margin会发生重叠
* 每个元素的margin box的左边， 与包含块border box的左边相接触(对于从左往右的格式化，否则相反)。即使存在浮动也是如此。
* BFC的区域不会与float box重叠。
* BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。反之也如此。
* 计算BFC的高度时，浮动元素也参与计算

## 解决浮动塌陷

### 1. 父元素设置float可以清除子元素的浮动（使父元素包裹子元素）

但是父元素也不再是块级元素（可以创建BFC的元素），而是浮动元素。

### 2. 父元素可以设置overflow， 只要不是默认的visible就可以清除子元素的浮动

### 3. 父元素新增一个盒子，或者直接用after伪元素

``` css
#large2::after{
  content:'';
  display:block;
  clear:both;
  overflow:hidden;
}
```

### 4.父元素新增属性 display: flow-root

告知父元素他是浮动元素的根节点，所以会包含float元素。

### 5.父元素可以设置高度height使他包含float元素。（但是如果同时设置height和其他清除浮动的方法，那么如果高度比浮动元素小的话就会截断。）

## 层叠上下文
