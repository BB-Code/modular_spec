(function(){
  requirejs.config({
    baseUrl:'js',
    paths:{
      noRelyOn: './modules/noRelyOn',
      RelyOn: './modules/relyOn',
      jquery: './libs/jquery-3.3.1.min',
      angular: './libs/angular.min'
    },
    shim:{
      angular:{
        exports: 'angular'
      }
    }
  });


  requirejs(['RelyOn','angular'],function(RelyOn,angular){
    RelyOn.showMsg();
    console.log(angular);
  });

})();
