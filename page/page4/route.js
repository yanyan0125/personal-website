(function(angular){
    var app = angular.module('page4.router',[]);
    app.config(function($stateProvider){
        $stateProvider.state('page4',{
            url : '/page4',
            views : {
                'myPage4' : {
                    templateUrl : 'page4/view.html',
                    controller:'page4Controller'
                }
            }
        });
    });
    app.controller('page4Controller',function(){
        console.log(444)

    })
})(angular);
