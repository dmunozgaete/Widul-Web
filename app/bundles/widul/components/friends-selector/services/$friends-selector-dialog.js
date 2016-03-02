// SERVICE
angular.module('widul.components')
    .provider('$friendsSelectorDialog', function()
    {
        this.$get = function($log, $q, $mdDialog)
        {
            var self = {};

            //ADD NEW FACTORY
            self.show = function(ev)
            {
                var deferred = $q.defer();
                $mdDialog.show(
                    {
                        controller: 'FriendsSelectorDialogController',
                        templateUrl: 'bundles/widul/components/friends-selector/friends-selector-dialog.tpl.html',
                        targetEvent: ev,
                        clickOutsideToClose: false,
                        escapeToClose: false,
                        focusOnOpen: true
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
