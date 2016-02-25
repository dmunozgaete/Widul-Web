angular.route('private.events/view/resume/index/:token', function(
    $scope,
    $state,
    $log,
    $Api,
    $q,
    $window,
    $stateParams,
    $Identity,
    $timeout,
    $mdSidenav,
    $friendsSelectorDialog,
    $loadingDialog
)
{
    //---------------------------------------------------
    // Model
    $scope.model = {
        user: $Identity.getCurrent()
    };


    //---------------------------------------------------
    // Function's
    $Api.query("Events/{token}",
        {
            token: $stateParams.token
        })
        .success(function(data)
        {
            $scope.model.event = data;
        });

    //---------------------------------------------------
    // Action's
    $scope.invite = function(ev)
    {
        $friendsSelectorDialog.show(ev)
            .then(function(guests)
            {
                $loadingDialog.show(ev);

                console.log(guests)

                var invitations = _.pluck(guests, 'token');

                $Api.create("Events/{event}/Invitations",
                    {
                        event: $scope.model.event.token,
                        data: invitations
                    })
                    .success(function(data)
                    {

                        $loadingDialog.hide();
                    })
                    .error($loadingDialog.hide);
            })
    };

    $scope.showMap = function(place)
    {
        var delay = $timeout(function()
        {

            $scope.panel = {
                place: place.token
            };

            $timeout.cancel(delay);
        }, 300);

        $mdSidenav("mapDetails").toggle();
    };

    $scope.cancel = function()
    {
        $window.history.back();
    };

});
