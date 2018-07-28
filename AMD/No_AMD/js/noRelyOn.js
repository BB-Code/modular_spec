/**
 * [没有依赖模块]
 * @param  {[type]} window [window]
 * @return {[type]}
 */
(function(window){
  let info = 'this is no rely on function';
  function showInfo(){
    return info;
  }
  window.noRelyOn = {showInfo};
})(window)
