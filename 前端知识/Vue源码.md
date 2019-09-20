####  http://hcysun.me/vue-design/art/

从Vue技术内幕这篇博客开始阅读Vue源码。

## Vue构造函数

Vue 的起点在src/core/instance/index.js

- `InitMixin(Vue)`
- `stateMixin(Vue)`
- `eventsMixin(Vue)`
- `lifecycleMixin(Vue)`
- `renderMixin(Vue)`

### `init`

新建