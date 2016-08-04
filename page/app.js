(function(angular){

       var app = angular.module('myApp',[
           'ui.router',
           'page1.router',
           'page2.router',
           'page4.router',
           'auto-active'
       ]);
//      app.controller('myController',function($scope,$location){
//
//            $scope.loca = $location;
//
//            $scope.$watch('loca.url()',function(){
//                if($scope.loca.url() == '/page3'){
//                    $('.page3 .circle').addClass('circle2');
//                    console.log(111)
//
//                }else{
//                    $('.page3 .circle').removeClass('circle2');
//                }
//            })
//        });

})(angular);
