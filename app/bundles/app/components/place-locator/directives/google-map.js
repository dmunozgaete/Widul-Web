/*------------------------------------------------------
 Company:           Valentys Ltda.
 Author:            David Gaete <dmunozgaete@gmail.com> (https://github.com/dmunozgaete)
 
 Description:       Custom Select Directive
 Github:            https://github.com/dmunozgaete/angular-gale

 Versión:           1.0.0-rc.1
 Build Date:        2016-01-22 3:20:29
------------------------------------------------------*/

angular.module('app.components')

.directive('googleMap', function($interpolate)
{
    return {
        restrict: 'E',
        scope:
        {
            coordinates: '=',
            title: '=',
            readonly: '='
        },
        templateUrl: 'bundles/app/components/place-locator/google-map.tpl.html',
        controller: function($scope, $element, googleMapService, $q)
        {
            var coordinates = null;

            var setMarker = function(coords)
            {
                if (typeof google != "undefined" && google.maps)
                {
                    var latLng = {
                        lat: coords.lat,
                        lng: coords.lng
                    };

                    // FIX GOOGLE MAPS REPAINT PROBLEM (GOOGLE MAPS DOWNLOAD THIS FONT, AND
                    // MAKE THAT WEBSITE REPAINT THE SOME, FLICKERING WEBSITE :/
                    // BUG EXPLAIN: http://stackoverflow.com/questions/25523806/google-maps-v3-prevent-api-from-loading-roboto-font#25902239
                    var head = document.getElementsByTagName('head')[0];
                    var insertBeforeOriginal = head.insertBefore;
                    head.insertBefore = function(newElement, referenceElement)
                    {
                        //OVERRIDE TEMPORARY 
                        if (newElement.href && newElement.href.indexOf('http://fonts.googleapis.com/css?family=Roboto') === 0)
                        {
                            return;
                        }

                        insertBeforeOriginal.call(head, newElement, referenceElement);
                    };

                    var map = new google.maps.Map($element.find("map")[0],
                    {
                        zoom: 14,
                        center: latLng
                    });


                    var marker = new google.maps.Marker(
                    {
                        position: latLng,
                        map: map
                    });

                    if ($scope.title)
                    {
                        var infowindow = new google.maps.InfoWindow(
                        {
                            content: $scope.title
                        });
                        infowindow.open(map, marker);
                    }

                    /*
                    //extend the bounds to include each marker's position
                    var bounds = new google.maps.LatLngBounds();
                    bounds.extend(marker.position);

                    //Automatic Zoom and center
                    map.fitBounds(bounds);
                    */


                    $scope.showLoading = false;
                }
            };

            //start loading Map
            googleMapService.load().then(function()
            {
                if (coordinates)
                {
                    setMarker(coordinates);
                }
            });

            //Wath For Model Change
            $scope.$watch("coordinates", function(value)
            {
                if (value)
                {
                    coordinates = value;
                    setMarker(coordinates);
                }
                else
                {
                    $scope.showLoading = true;
                }
            });


        }
    };
});
