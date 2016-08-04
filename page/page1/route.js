(function(angular){
    var app = angular.module('page1.router',[]);
    app.config(function($stateProvider){
        $stateProvider.state('page1',{
            url : '/page1',
            views : {
                'myPage1' : {
                    templateUrl : 'page1/view.html',
                    controller:'page1Controller'
                }
            }
        });
    });
    app.controller('page1Controller',function($scope){
        var mySwiper = new Swiper('#page-container', {
            autoplay: 2000,
            loop : true,
            pagination : '.swiper-pagination',
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            paginationClickable :true,
            autoplayDisableOnInteraction : false   //点击之后，可以继续轮播
        });

    });

})(angular);
