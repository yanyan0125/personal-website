(function(angular){
    var app = angular.module('page2.router',[]);
    app.config(function($stateProvider){
        $stateProvider.state('page2',{
            url : '/page2',
            views : {
                'myPage2' : {
                    templateUrl : 'page2/view.html',
                    controller:'page2Controller'
                }
            }
        });
    });

    app.controller('page2Controller',function($scope){




    });

})(angular);
