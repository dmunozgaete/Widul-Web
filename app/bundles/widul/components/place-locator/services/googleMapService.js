angular.module('widul.components')

.service('googleMapService', function($window, $q)
{
    var deferreds = []; //When various google maps are present in one page!

    // Load Google map API script
    function loadScript()
    {
        // Use global document since Angular's $document is weak
        var script = document.createElement('script');
        script.src = '//maps.googleapis.com/maps/api/js?sensor=false&language=en&callback=initGoogleMaps';

        document.body.appendChild(script);
    }

    return {

        load: function()
        {
            var deferred = $q.defer();

            if (typeof google !== "undefined" && google.maps)
            {
                deferred.resolve();
            }
            else
            {
                //MULTIPLE STACKING'S!!
                if (deferreds.length > 0)
                {
                    //Is loading from other place!
                    deferreds.push(deferred);

                    return deferred.promise;
                }
                else
                {
                    // Script loaded callback, send resolve
                    $window.initGoogleMaps = function()
                    {
                        //RESOLVE ALL STACKED PROMISES
                        angular.forEach(deferreds, function(deferred)
                        {
                            deferred.resolve();
                        });

                        //REMOVE INIT REFERENCE
                        deferreds = [];
                        delete $window.initGoogleMaps;
                    };

                    //Stack the first request always =)!
                    deferreds.push(deferred);

                    loadScript();
                }
            }

            return deferred.promise;

        }

    };

});
