(function(angular){
    'use strict';
    var app = angular.module('auto-active',[]);
    app.directive('autoActive',['$location',function($location){
        return {
            link: function (scope,element,attributes) {
                scope.location = $location;
                scope.$watch('location.url()',function(now,old){
                    var aLink = element.children().attr('ui-sref');
                    if (now.endsWith(aLink)) {
                        element.parent().children().removeClass(attributes.autoActive);
                        element.addClass(attributes.autoActive);
                    }
                });
            }
        }


    }])

})(angular);
