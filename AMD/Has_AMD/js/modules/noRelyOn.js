/**
 * [没有依赖的AMD模块]
 * @return {[function]} [返回一个函数]
 */
define(function(){
  let info = 'this is no rely on function';
  function showInfo(){
    return info;
  }
  return { showInfo };//暴露模块
})
