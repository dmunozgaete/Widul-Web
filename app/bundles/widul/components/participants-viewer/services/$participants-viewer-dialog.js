// SERVICE
angular.module('widul.components')
    .provider('$participantsViewerDialog', function()
    {
        this.$get = function($log, $q, $mdDialog, $restrictedAccess)
        {
            var self = {};

            //ADD NEW FACTORY
            self.show = function(ev, config)
            {
                var deferred = $q.defer();

                $restrictedAccess.validate().then(function()
                {

                    $mdDialog.show(
                        {
                            controller: 'ParticipantsViewerDialogController',
                            templateUrl: 'bundles/widul/components/participants-viewer/participants-viewer.tpl.html',
                            targetEvent: ev,
                            clickOutsideToClose: true,
                            escapeToClose: true,
                            focusOnOpen: false,
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

                });

                return deferred.promise;
            };

            return self;
        };
    });
