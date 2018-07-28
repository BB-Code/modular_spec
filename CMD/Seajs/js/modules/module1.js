/**
 * [定义没有依赖的模块]
 * @param  {[type]} require [description]
 * @param  {[type]} exports [description]
 * @param  {[type]} module  [description]
 * @return {[object]}         [返回对象]
 */
define(function(require,exports,module){
  let info = 'module1';
  function foo(){
    console.log(info);
  }
  module.exports = {foo};
})
