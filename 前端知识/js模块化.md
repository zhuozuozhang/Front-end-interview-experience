# Module, Module.export, export, export default, exports

https://segmentfault.com/a/1190000010426778

## require和import 

https://juejin.im/post/5b1f784be51d454e907be14a

1. require在编译时加载整个模块,import在运行时加载用到的部分

2. require加载的是源对象的拷贝（只拷贝一层，如果内部还是对象的话，所有模块会同步内部的变化）

3. 同一个文件中多次require同一个模块，只会加载一次，他们会是同一个对象。
