# Vuex

基本所有的面试都问到了Vuex。所以学习一下。

Vuex是一个为Vue开发的状态管理模式。采用集中式储存管理应用的所有组件的状态。保证状态以一种可预测的方式发生变化。

普通的单向数据流包含以下几部分：

- state，驱动应用的数据源。
- view， 以声明方式将state映射到视图。
-actions，响应在view上的用户输入导致的状态的变化。
![Flow](https://vuex.vuejs.org/flow.png)

但是当应用遇到多个组件共享状态时无能为力。所以把组建的共享状态抽出来，以一个全局的单例模式来管理。
![Vuex](https://vuex.vuejs.org/vuex.png)

## VuexEZ

Vuex的核心是store，store是一个容器，包含应用中的大部分状态。和单纯的全局对象有两点不同

1. Vuex的状态时响应式的，Vue组件从store中读取状态，若store中的状态发生变化，组件中的内容也会得到更新。

2. 不能直接改变store中的状态。唯一途径是**commit mutation**。使得我们方便地跟踪每一个状态的变化。

初始化Vuex

```js
let const = new Vuex.Store({
  state:{
    name:"",
  },
  mutations: {
    
  }
})
```

## State

从Vuex中获取数据

```js
computed:{
  name(){
    return store.state.name
  }
}
```