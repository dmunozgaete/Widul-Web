/*------------------------------------------------------
 Company:           Valentys Ltda.
 Author:            David Gaete <dmunozgaete@gmail.com> (https://github.com/dmunozgaete)
 
 Description:       Directive
 Github:            https://github.com/dmunozgaete/angular-gale

 Versión:           1.0.0-rc.1
 Build Date:        2016-01-22 3:20:29
------------------------------------------------------*/

angular.module('widul.components')

.directive('placeViewer', function($window)
{
    return {
        restrict: 'E',
        scope:
        {
            place: '='
        },
        templateUrl: 'bundles/widul/components/place-viewer/place-viewer.tpl.html',
        controller: function($scope, $element, $q, $Api, $log, $timeout)
        {
            $scope.model = {};

            //(delay for smoothness)
            $Api.read("Places/{place}",
                {
                    place: $scope.place
                })
                .success(function(data)
                {
                    $scope.model.place = data;
                });


        },
        link: function(scope, element, attrs, ctrl) {


        }
    };
});
