/**
 * [有依赖模块]
 * @param  {[type]} window   [window]
 * @param  {[type]} noRelyOn [noRelyOn]
 * @return {[type]}
 */
(function(window,noRelyOn){
  let msg = 'this is  rely on function';
  function showMsg(){
    console.log(msg);
    console.log(noRelyOn.showInfo());
  }
  window.relyOn = {showMsg};
})(window,noRelyOn)
