## 用原生JS实现Promise

1. `Promise`基本结构和用法

```js
new Promise((resolve, reject)=>{
  if(condition){
    resolve();
  }else{
    reject();
  }
})
```

2. `Promise`的状态

`Promise`存在三种状态

- Pending（进行中）
- Fulfilled（已成功）
- Rejected（已失败）

状态只能由`Pending`变为`Fulfilled`或者由`Pending` 变为`Rejected`。且只改变一次。

