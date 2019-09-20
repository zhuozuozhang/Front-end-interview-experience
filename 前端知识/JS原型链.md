# Js Chain

## this

### 函数调用

在了解this之前要先了解JavaScript中的函数。因为this的改变是因为函数调用而改变的。函数是一个特殊的对象。

- call函数传入对象是null 或 undefined 那么默认就是window/global。

- setTimeout 和 setInterval回调函数中默认的this是window/global。

## 箭头函数

箭头函数没有自己的this， argument， super

## 对象

- \__proto__ 是对象的原型对象

- constructor 是对象的构造函数

## 函数

- prototype 是函数的原型对象

### New 的函数带不带括号的区别
