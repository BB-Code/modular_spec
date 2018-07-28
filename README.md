# javascript 模块化规范

- :one: CommonJS
- :two: AMD
- :three: CMD
- :four: ES6

## CommonJS

:pushpin: **说明**
  1. 每个文件相当于一个模块
  2. 在服务器端,模块是同步运行时加载
  3. 在浏览器端,模块需提前打包编译处理

:pushpin: **基本语法**

  1. 暴露模块
    `module.exports=value` 或者 `exports.xxx=value`
  2. 引入模块(自定义与第三方模块的区别)

|自定义|第三方
|-|-|
| `require('文件路径＋模块名')` |`require('模块名')`   |   

:pushpin: **实现**

  1. 服务端端实现 [Node.js](https://nodejs.org/zh-cn/)
  2. 浏览器端实现 [Browserify](http://browserify.org/)

:pushpin: **代码**

[代码查看](https://github.com/BB-Code/modular_spec/tree/master/CommonJS)

## AMD

:pushpin: **说明**
  1. 异步模块定义
  2. 专用于浏览器端,异步加载模块


:pushpin: **基本语法**

  1. 暴露模块
    - 定义没有依赖的模块
      `define(function(){return 模块})`
    - 定义有依赖的模块
      `define(['module1','module2'],function(m1,m2){ return 模块})`
  2. 引入模块(自定义与第三方模块的区别)
    `require(['module1','module2'],function(m1,m2){ 使用 m1,m2})`

:pushpin: **实现**

-  [Require.js](https://requirejs.org/)　浏览器端

:pushpin: **代码**

  [代码查看](https://github.com/BB-Code/modular_spec/tree/master/AMD)

## CMD

:pushpin: **说明**
  1. 通用模块定义
  2. 专用于浏览器端,异步加载模块
  3. 模块使用时才加载

:pushpin: **基本语法**

  1. 暴露模块
    - 定义没有依赖的模块
```javascript
define(function(require,exports,module){
  exports.xxx = value
  module.exports = value
  })
```
    - 定义有依赖的模块
```javascript
define(function(require,exports,module){
  var module = require('./module');//同步引入依赖模块
  require.async('./module2',function(m2){}) //异步引入依赖模块
　exports.xxx = value//暴露模块
  })
```
  2. 引入模块

    ```javascript
        require(function(require){
            var m1 = require('./module1');
            var m2 = require('./module2');
            使用m1 m2
        })
    ```

:pushpin: **实现**

-  [Sea.js](https://github.com/seajs/seajs)　浏览器端

:pushpin: **代码**

  [代码查看](https://github.com/BB-Code/modular_spec/tree/master/CMD)


## ES6

:pushpin: **说明**
  1. 依赖模块需要编译打包

:pushpin: **基本语法**

  1. 暴露模块
      `export`
  2. 引入模块
    `import`

:pushpin: **实现**

  - [Babel.js](https://babeljs.io/) es6编译es5　浏览器端
  - [Browserify](http://browserify.org/) 编译打包js　浏览器端

:pushpin: **代码**

  [代码查看](https://github.com/BB-Code/modular_spec/tree/master/ES6)
