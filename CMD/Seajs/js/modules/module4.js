/**
 * [定义有依赖的模块]
 * @param  {[type]} require [description]
 * @param  {[type]} exports [description]
 * @param  {[type]} module  [description]
 * @return {[object]}         [返回对象]
 */
define(function(require,exports,module){
  let msg = 'module4';
  let module2 = require('./module2');
  module2();
  require.async('./module3',function(module3){
    module3.module3.foo3();
  })
  function foo4(){
    console.log(msg);
  }
  exports.show = foo4;//改变暴露方法
});
