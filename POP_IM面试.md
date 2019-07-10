# POP_IM面试

## 1.JS变量作用域与变量提升

(答错了)

```js
var name = "haha"
  function show(){
    console.log(name)
    var name = "xixi"
    console.log(name)
    console.log(age)
  }
  show()
```

输出:

```html
undefined
xixi
报错--index.html:8 Uncaught ReferenceError: age is not defined
```

## 2.回调函数

```js
for(var i = 0;i < 5;i++){
    setTimeout(function(){
      console.log(i)
    },100)
  }
  console.log(i)
```

输出什么？(我答错了)

```html
6个5
```

如何输出0 1 2 3 4?

```js
for(var i = 0;i < 5;i++){
    let temp = i
    setTimeout(function(){
      console.log(temp)
    },100)
  }
  console.log(i)
```

如果用var的话需要再封装一层函数。不然在同一个作用域重复点翻译会取最后一次定义的值输出。

```js
for(var i = 0;i < 5;i++){
    (()=>{
      var temp = i
      setTimeout(function(){
        console.log(temp)
      },100)
    })()
  }
  console.log(i)
```

## 3. `==`符号的用法

前序知识

```js
单目运算符+ 把后面的变量变成Number, +val <===> Number(val)
!!"" === false
!!undefined === false
!!null === false
!!"abc" === true
!!0 === false
!![] === true
!!{} === true
!!NaN === false
NaN与任何值都不相等，包括他自己
123 == "123" ==> 123 === Number("123")
123 == true ==> 123 === Number(true)
typeof new String() ==> "object"
typeof "" ==> "string"
new String() == "" ==> true
new String() === "" ==> false

```

题目：

```js
"" == undefined

```

## 4.async await函数

```js
x=0
async function hha(){
  x+= await 2
  console.log(x)
}
hha()
x+=1
console.log(x)
```

答案:

```js
1
2
```

对比来看：

```js
x=0
async function hha(){
  x = await 2 + x
  console.log(x)
}
hha()
x+=1
console.log(x)
```

```js
x=0
async function hha(){
  x = await (2 + x)
  console.log(x)
}
hha()
x+=1
console.log(x)
```

答案分别是:

```js
1
3
和
1
2
```

原因大概是，x += await 2 的时候，x所对应的值已经取出存到内存中，此时x = 0.
接着执行下面的主函数，x+=1 输出1， 接着回到异步队列，完成 x += await 2 的后半部分，也就是取出 x = 0 + 2 = 2。 所以输出2。最后x === 2.

而 x = await 2 + x 的时候，还没取出x的值就去执行主函数下面的语句， x+=1 ，x的值变成1，再回来执行 x = await 2 + x 的 await 后面的语句。这时x已经是1. 所以 x = 3.

要了解asyn/await 的工作原理，必须要了解**Generator**。因为他们是**Generator**的语法糖。

await表示紧跟在后面的表达式需要等待结果。

await命令后面，可以是 Promise 对象和原始类型的值（数值、字符串和布尔值，但这时会自动转成立即 resolved 的 Promise 对象
## 5.算法题

找出一个链表是否有环。（easy）

找出入环的节点。（没做出来）

