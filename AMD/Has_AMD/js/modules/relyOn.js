/**
 * [有依赖的AMD模块]
 * @param  {[type]} noRelyOn [noRelyOn]
 * @return {[function]} [返回一个函数]
 */
define(['noRelyOn','jquery'],function(noRelyOn,$){
  let msg = 'this is  rely on function';
  function showMsg(){
    console.log(msg);
    console.log(noRelyOn.showInfo());
  }
  $('body').css('background','lightpink');
  return {showMsg};
})
