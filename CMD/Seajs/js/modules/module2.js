/**
 * [定义没有依赖的模块]
 * @param  {[type]} require [description]
 * @param  {[type]} exports [description]
 * @param  {[type]} module  [description]
 * @return {[function]}         [返回函数]
 */
define(function(require,exports,module){
  let info = 'module2';
  function bar(){
    console.log(info);
  }
  module.exports = bar;
})
