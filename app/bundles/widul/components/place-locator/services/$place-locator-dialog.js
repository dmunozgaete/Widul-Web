// SERVICE
angular.module('widul.components')
    .provider('$placeLocatorDialog', function()
    {
        var $ref = this;

        this.$get = function($log, $q, $mdDialog)
        {
            var self = {};

            //ADD NEW FACTORY
            self.show = function(ev, config)
            {
                var deferred = $q.defer();
                $mdDialog.show(
                    {
                        controller: 'PlaceLocatorDialogController',
                        templateUrl: 'bundles/widul/components/place-locator/place-locator-dialog.tpl.html',
                        targetEvent: ev,
                        clickOutsideToClose: false,
                        escapeToClose: false,
                        focusOnOpen: true,
                        locals:
                        {
                            config: config
                        }
                    })
                    .then(function(data)
                    {
                        deferred.resolve(data);
                    }, function()
                    {
                        deferred.reject();
                    });

                return deferred.promise;
            };

            return self;
        };
    });
