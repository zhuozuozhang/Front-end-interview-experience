Position: sticky

Shape-outside (float用)

Outline. (除了该元素之外的内容)

Background-attachment ：fixed 背景不跟着内容移动。这个时候背景定位是相对于视口的。

图片比例不变

​	当设置图片宽高时，比例会被缩放，可以设置`object-fit:contain` 来使图片比例不变（多出来的空间会留白）

`filter:blur(2px)` 虚化

​	自适应宽高

​	`width:fill-available` 填充整个空间

​	`fill-available`填充整个空间

​	`max-content`表示采用内部元素宽度值最大的那个元素的宽度作为最终容器的宽度。如果出现文本，则相当于文本不换行

​	`min-content` 采用内部元素最小宽度值最大的那个元素的宽度作为最终容器的宽度

​	`fit-content`将元素宽度收缩为内容宽度

inline 元素的高度永远都不会撑开他的父元素，垂直方向上的border、padding和margin只会和上下的内容覆盖，不会占据大小。  

inline-block 元素的高度和普通block元素一样，如果比父元素的高度要大，将会把父元素撑开。
