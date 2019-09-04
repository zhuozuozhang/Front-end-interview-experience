### Glup

- Glup和Grunt都是前端项目构建工具。也是自动任务运行器。

- Webpack是模块化打包工具

### Webpack

**entry** 入口，是项目起点的模块

**output** 出口，告诉webpack在哪里输出打包好的文件以及其命名

**loader** 加载器，告诉webpack如何转换某种类型的文件并且将这种文件加入打包出的文件中。

- `css-loader` 解析打包css代码
- `style-loader` 将css代码以style标签插入到html中
- `file-loader` 直接输出文件，返回构建后的文件路径
- `url-loader` 打包图片将小于limit的图片编码成dataURI，大于limit的图片通过`file-loader`引入

**plugins** 插件，附加功能。比如打包优化，资源管理，注入环境变量，热加载等等。

- `html-webpack-plugin`：生成HTML文件

- `CommonChunkPlugin` : 将chunks相同的模块代码提取成公共js

- `ExtractTextWebpackPlugin` 将CSS从bundle文件里提取成一个独立的css文件。

- `CopyWebpackPlugin` 将文件或者文件夹拷贝到构建的输出目录。

- `UglyfyjsWebpackPlugin` 压缩js

- `ZipWebpackPlugin` 将打包出的资源生成一个zip包

**mode** Webpack4 的新概念，用来指定当前的构建环境 --- Production、development、或者是none。

设置了mode之后可以使用webpack的内置函数。默认使用production

- `development` 设置`process.env.NODE_ENV = 'development'` 开启 `NamedChunksPlugin` 和 `NamedModulesPlugin` 热更新阶段打印变更的文件和代码。

- `production` 设置 `process.env.NODE_ENV = 'production'` 开启` FlagDependencyUseagePlugin` ...... 等插件。压缩代码，识别代码副作用并提示....

- `none` 不开启任何优化

我们的项目中使用Glup作为自动化任务运行器，每当图片目录加入图片就会将其压缩为webp格式的图片，使图片体积大大减小。然后再由webpack打包到输出目录的资源文件夹中。

、项目用到的属性

- `parallel : require('os').cpus().length > 1`

### 资源解析

- `babel-loader` 在`.babelrc`中配置presets 和 plugins。
presets 是 plugins 的集合，一个plugin 对应一个功能。

### 优化

- **长缓存优化** 浏览器为了加快加载速度会缓存用户访问的静态资源。但是Webpack每次打包都会更新代码文件和名称。

  一般在项目中把公共的依赖库和程序入口文件隔离并进行单独打包构建，用chunkhash来生成hash值，只要依赖公共库不变，那么其对应的chunkhash就不会变，从而达到缓存的目的。

- `Tree-shaking`  *tree shaking* 是一个术语，通常用于描述移除 JavaScript 上下文中的未引用代码(dead-code)。